import './commentPreview.css'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

export default function CommentPreview() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useContext(AuthContext)
    return (
        <div className='commentPreview'>
            <img
                src={user.profilePic
                    ? PF + user.profilePic
                    : PF + 'person/noAvatar.png'

                }
                className="commentPreviewProfilePic"
            >
            </img>

            <input type="text" placeholder="What do you think?" className="commentPreviewInput" />

        </div>
    )
}
