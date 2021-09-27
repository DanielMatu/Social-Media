import './comment.css'
import { format } from 'timeago.js'
import { axiosInstance } from '../../config'
import { useState, useEffect } from 'react'

export default function Comment({ comment }) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [commenter, setCommenter] = useState()
    useEffect(() => {
        const getCommenter = async () => {

            const commenter = await axiosInstance.get('/user?userId=' + comment.sender)
            console.log('heres the commenter')
            console.log(commenter.data)
            console.log('heres the comment sender')
            setCommenter(commenter.data)
        }
        getCommenter()
    }, [])

    useEffect(() => {
        console.log('heres commenter')
        console.log(commenter?.username)
    }, [commenter])




    return (
        <div className='comment'>
            <div className="commentTop">
                <img
                    src={commenter?.profilePic
                        ? PF + commenter?.profilePic
                        : PF + 'person/noAvatar.png'

                    }
                    className="commentProfilePic"
                >
                </img>


                <div className="commentTimeAgo">{commenter?.username} &nbsp; - &nbsp; {format(comment.createdAt)}</div>
            </div>
            <div className="commentBody">
                {comment.text}

            </div>

        </div>
    )
}

