import "./post.css"
import { MoreVert } from '@material-ui/icons'
import { useState, useEffect } from 'react'
import { axiosInstance } from '../../config'
import { format } from 'timeago.js'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Comment from '../comment/Comment'
import CommentPreview from "../commentPreview/CommentPreview"

export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const [comments, setComments] = useState([])
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { user: currentUser } = useContext(AuthContext)

    const populateComments = async () => {
        const res = await axiosInstance.get(`/comments/${post._id}`)
        setComments(res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt)
        }))    
    }

    useEffect(() => {
        populateComments()
        console.log('just populated them')

        // <Comment sender="jane" text="heres janes test comment"/>

    }, [post])

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axiosInstance.get(`/user?userId=${post.userId}`)
            setUser(res.data)
        }
        fetchUser()
    }, [post.userId])

    const likeHandler = () => {
        try {
            axiosInstance.put("/posts/" + post._id + "/like", { userId: currentUser._id })
        } catch (err) {

        }
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg'
                            src={user.profilePic
                                ? PF + user.profilePic
                                : PF + "person/noAvatar.png"
                            }
                            alt=""
                        />
                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={PF + post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeButton' src={`${PF}like.png`} onClick={likeHandler} alt="" />
                        <img className='likeButton' src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {comments.length} comments
                        </span>
                    </div>
                </div>
                <div className="postComments">
                    {
                        comments.map((c) => (
                            <Comment key={c._id} comment={c} />
                        ))
                    }
                </div>
                <CommentPreview post={post} populateComments={populateComments} />
            </div>
        </div>
    )
}
