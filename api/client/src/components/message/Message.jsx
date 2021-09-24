import './message.css'
import { format } from 'timeago.js'
import { axiosInstance } from '../../config'
import { useState, useEffect } from 'react'

export default function Message({ message, own }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState()

    const populateUser = async () => {
        const user = await axiosInstance.get('/user?userId=' + message.sender)
        setUser(user)
    }

    useEffect(() => {
        populateUser()
    }, [])

    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className='messageImg'
                    src={
                        user?.data.profilePic 
                            ? PF + user?.data.profilePic 
                            : PF + 'person/noAvatar.png'
                            
                    }
                    alt=""
                />
                <p className='messageText'>{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}
