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
    const { user, targetUser, socket, dispatch } = useContext(AuthContext)
    const scrollRef = useRef()
    const location = useLocation()
    const [conversationsLoaded, setConversationsLoaded] = useState(false)

    useEffect(() => {
        // if the client is unconnected, connect
        if (!socket){
            console.log('this was socket - thats why a new one must be made (should be null)')
            console.log(socket)
            let newSocket
            if (process.env.NODE_ENV === 'production') {
                newSocket = io('wss://dmatu-social-media.herokuapp.com')
    
            } else {
                newSocket = io('ws://localhost:8800')
            }
    
            newSocket.on('connect', () => {
                dispatch({type: 'UPDATE_SOCKET', payload: newSocket})
            })
        }

    }, [])

    // add new socket listeners and emitters when a socket changes
    useEffect(() => {
        if (socket){
            socket.on('diconnect', () => {
                console.log('diconnected with socket id: ')
                console.log(socket.id)
            })
            socket.on("getMessage", (data) => {
                setArrivalMessage({      
                  sender: data.senderId,
                  text: data.text,
                  createdAt: Date.now(),
                });

              });
            socket.emit('addUser', user._id)
            socket.on('getUsers', (users) => {
                setOnlineUsers(user.followings.filter(f => users.some(u => u.userId === f))) 
            })
        }
    }, [socket])


    useEffect(() => {
        // when a new message comes for a certain convo, display it
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage])
    }, [arrivalMessage, currentChat])



    useEffect(() => {
        let didCancel = false

        const getConversations = async () => {
            try {
                const res = await axiosInstance.get('/conversations/' + user._id)
                if (!didCancel){
                    setConversationsLoaded(true)
                    setConversations(res.data)
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
                return
            }
            // if makeConvo is true, we must make a conversation with
            // the target user or move it up if one already exists
            if (location.state?.makeConvo) {
                // check if the convo to create already exists
                const convoToCreateIndex = conversations.findIndex((conversation) =>
                (conversation.members.includes(targetUser._id)
                    && conversation.members.includes(user._id)))
                // convo found, so we move it up
                if (convoToCreateIndex !== -1){
                    conversations.unshift(...conversations.splice(convoToCreateIndex, 1))
                } else {
                    // if no convo was found, we make one
                    const newConvo = await axiosInstance.post('/conversations', {
                        senderId: user._id,
                        receiverId: targetUser._id
                    })
                    setConversations([newConvo.data, ...conversations])
                }
                location.state.makeConvo = false
            }
        }
        makeNewConvo()
    }, [conversations])

    // open the first convo
    useEffect(() => {
        setCurrentChat(conversations[0])
    }, [conversations])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])



    const handleSubmit = async (e) => {
        e.preventDefault()
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id
        }

        const receiverId = currentChat.members.find(member => member !== user._id)

        socket.emit('sendMessage', {
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
