import "./chatOnline.css"
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
    const [friends, setFriends] = useState([])
    const [onlineFriends, setOnlineFriends] = useState([])
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get('/user/friends/' + currentId)
            setFriends(res.data)
        }

        getFriends()
    }, [currentId])

    useEffect(() => {
        console.log('heres friends')
        console.log(friends)
        setOnlineFriends(friends.filter(f => onlineUsers.includes(f._id)))
    }, [friends, onlineUsers])

    const handleClick = async (user) => {
        try {
            console.log('current id')
            console.log(currentId)
            console.log('friend id')
            console.log(user._id)
            const res = await axios.get(`/conversations/find/${currentId}/${user._id}`)
            setCurrentChat(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='chatOnline'>
            {onlineFriends.map((o) => (

                <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
                    <div className="chatOnlineImgContainer">
                        <img
                            className='chatOnlineImg'
                            src={o?.profilePic
                                ? PF + o.profilePic
                                : PF + "person/noAvatar.png"}
                            alt="" />
                        <div className="chatOnlineBadge"></div>
                    </div>
                    <div className="chatOnlineName">{o.username}</div>
                </div>
            ))}
        </div>
    )
}
