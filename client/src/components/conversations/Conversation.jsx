import "./conversation.css"
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Conversation({ conversation, currentUser }) {
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id)

        const getUser = async () => {
            try {
                const res = await axios('/user?userId=' + friendId)
                setUser(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUser()

    }, [currentUser, conversation])



    return (
        <div className='conversation'>
            <img className='conversationImg'
                src={ user.profilePic ? PF + user.profilePic : PF + "person/noAvatar.png"}
                alt=""
            />
            <span className="conversationName">{user.username}</span>
        </div>
    )
}
