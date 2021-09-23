import './messenger.css'
import Topbar from '../../components/topbar/Topbar'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import { useContext, useEffect, useState, useRef } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { axiosInstance } from '../../config'
import { io } from 'socket.io-client'
import { useLocation } from 'react-router-dom'

export default function Messenger() {
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const [arrivalMessage, setArrivalMessage] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const socket = useRef()
    const { user, targetUser } = useContext(AuthContext)
    const scrollRef = useRef()
    const location = useLocation()
    const [conversationsLoaded, setConversationsLoaded] = useState(false)

    useEffect(() => {

        // connect the client side socket
        if (process.env.NODE_ENV === 'production') {
            socket.current = io('wss://dmatu-social-media.herokuapp.com')

        } else {
            socket.current = io('ws://localhost:8800')
        }

        socket.current.on('connect', () => {
            console.log('connected')
        })


    }, [])

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage])
    }, [arrivalMessage, currentChat])

    useEffect(() => {
        socket.current.emit('addUser', user._id)
        socket.current.on('getUsers', (users) => {
            setOnlineUsers(user.followings.filter(f => users.some(u => u.userId === f)))
        })
    }, [user])

    useEffect(() => {
        let didCancel = false

        const getConversations = async () => {
            try {
                const res = await axiosInstance.get('/conversations/' + user._id)
                // console.log('heres the conversations')
                // console.log(res.data)
                // console.log('and the user id')
                // console.log(user._id)
                if (!didCancel){
                    setConversationsLoaded(true)
                    console.log('set conversationsloaded to true')

                    setConversations(res.data)
                    console.log('setconversations to ')
                    console.log(res.data)
                }


                return () => {
                    didCancel=true
                }
            } catch (err) {
                console.log(err)
            }

        }
        getConversations()
    }, [user._id])

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axiosInstance.get('/messages/' + currentChat?._id)
                setMessages(res.data)
                // setNewMessage("")
            } catch (err) {
                console.log(err)
            }
        }
        getMessages()
    }, [currentChat])

    useEffect(() => {
        const makeNewConvo = async () => {
            // we need conversations to be loaded in for this to work, so just 
            // break if its not loaded yet (it wont be for the first few milliseconds)
            if (!conversationsLoaded){
                console.log('interupted makenew because convo not loadaed')
                return
            }

            console.log('went ahead because convos loaded')
            // if makeConvo is true, we must make a conversation with
            // the target user or move it up if one already exists
            if (location.state?.makeConvo) {
                // check if the convo to create already exists
                const convoToCreateIndex = conversations.findIndex((conversation) =>
                (conversation.members.includes(targetUser._id)
                    && conversation.members.includes(user._id)))
    
                console.log('heres convotocreate')
                console.log(convoToCreateIndex)
                // console.log(conversations[convoToCreateIndex])
                console.log('heres all conversations')
                console.log(conversations)
                // convo found, so we move it up
                if (convoToCreateIndex !== -1){
                    conversations.unshift(...conversations.splice(convoToCreateIndex, 1))
                } else {
                    // if no convo was found, we make one
                    const newConvo = await axiosInstance.post('/conversations', {
                        senderId: user._id,
                        receiverId: targetUser._id
                    })
                    console.log('heres the userid')
                    console.log(user._id)

                    console.log('heres the new convo')
                    console.log(newConvo)
                    setConversations([newConvo.data, ...conversations])
                }
                location.state.makeConvo = false
            }
        }
        makeNewConvo()
    }, [conversations])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id
        }

        const receiverId = currentChat.members.find(member => member !== user._id)

        socket.current.emit('sendMessage', {
            senderId: user._id,
            receiverId,
            text: newMessage
        })

        try {
            const res = await axiosInstance.post('/messages', message)
            setMessages([...messages, res.data])
            setNewMessage("")
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    return (
        <>
            <Topbar />
            <div className='messenger'>
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for friends" className="chatMenuInput" />
                        {conversations.map((c) => {
                            return (
                                <div key={c._id} onClick={() => setCurrentChat(c)}>
                                    <Conversation key={c._id} conversation={c} currentUser={user} />
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {
                            currentChat ?
                                <>
                                    <div className="chatBoxTop">
                                        {
                                            messages.map(m => (
                                                <div key={m._id} ref={scrollRef}>
                                                    <Message key={m._id} message={m} own={m.sender === user._id} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="chatBoxBottom">
                                        <textarea className='chatMessageInput'
                                            placeholder="write something..."
                                            onChange={(e) => setNewMessage(e.target.value)}
                                            value={newMessage}
                                        >
                                        </textarea>
                                        <button className='chatSubmitButton' onClick={handleSubmit}>Send</button>
                                    </div>
                                </>
                                : <span className='noConversationText'>Open a conversation to start a chat.</span>}
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline onlineUsers={onlineUsers} currentId={user._id} setCurrentChat={setCurrentChat} />
                    </div>
                </div>
            </div>
        </>
    )
}
