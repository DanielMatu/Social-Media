import './commentPreview.css'
import { AuthContext } from '../../context/AuthContext'
import { axiosInstance } from '../../config'
import { useContext, useRef } from 'react'

export default function CommentPreview({post, populateComments}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useContext(AuthContext)
    const commentText = useRef()

    const submitComment = async(e) => {
        e.preventDefault()
        const comment = {
            postId: post._id,
            sender: user._id,
            text: commentText.current.value
        }
        await axiosInstance.post('/comments/' + post._id, comment)
        commentText.current.value = ''
        populateComments()
    }

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

            <form style={{width: '90%'}} onSubmit = {(e) => {submitComment(e)}}>
                <input ref={commentText} type="text" placeholder="What do you think?" className="commentPreviewInput" />
            </form>

        </div>
    )
}
