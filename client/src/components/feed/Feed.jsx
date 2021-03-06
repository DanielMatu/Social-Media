import Share from '../share/Share'
import Post from '../post/Post'
import "./feed.css"
import { useState, useEffect, useContext } from 'react'
import { axiosInstance } from '../../config'
import { AuthContext } from '../../context/AuthContext'

export default function Feed({ username }) {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)

    const fetchPosts = async () => {
        const res = username
            ? await axiosInstance.get("/posts/profile/" + username)
            : await axiosInstance.get("/posts/timeline/" + user._id)
        setPosts(res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt)
        }))
    }

    useEffect(() => {

        fetchPosts()
    }, [username, user._id])
    return (
        <div className='feed'>
            <div className="feedWrapper">
                {(!username || username === user.username) && <Share fetchPosts={fetchPosts}/>}
                {posts.map(p => (
                    <Post key={p._id} post={p} />
                ))}

            </div>
        </div>
    )
}
