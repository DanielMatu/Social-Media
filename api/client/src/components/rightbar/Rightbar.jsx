import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from "../online/Online"
import { useState, useEffect, useContext } from 'react'
import { axiosInstance } from '../../config'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { Add, Remove } from '@material-ui/icons'
import { Chat } from "@material-ui/icons"

export default function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([])
    const { user: currentUser, dispatch, targetUser } = useContext(AuthContext)
    const [followed, setFollowed] = useState(currentUser.followings.includes(targetUser?._id))
    const history = useHistory()

    useEffect(() => {
        setFollowed(currentUser.followings.includes(targetUser?._id))
    }, [currentUser, targetUser])

    useEffect(() => {
        let didCancel = false
        const getFriends = async () => {
            try {
                let friendList
                if (targetUser && Object.keys(targetUser).length !== 0) {
                    friendList = await axiosInstance.get('/user/friends/' + targetUser._id)
                } else {
                    friendList = await axiosInstance.get('/user/friends/' + currentUser._id)
                }
                if (!didCancel) {
                    setFriends(friendList.data)
                }
            } catch (err) {
                console.log(err)
            }
        }

        getFriends()

        return () => {
            didCancel = true
        }

    }, [currentUser, targetUser])

    const handleClick = async () => {
        try {
            if (followed) {
                await axiosInstance.put('/user/' + targetUser._id + "/unfollow", {
                    userId: currentUser._id
                })
                dispatch({ type: "UNFOLLOW", payload: targetUser._id })
            } else {
                await axiosInstance.put('/user/' + targetUser._id + "/follow", {
                    userId: currentUser._id
                })
                dispatch({ type: "FOLLOW", payload: targetUser._id })
            }
        } catch (err) {
            console.log(err)
        }
        setFollowed(!followed)
    }

    const navToMessaging = () => {
        history.push({
            pathname: '/messenger',
            state: { makeConvo: 'true' }
        })
    }

    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="assets/gift.png" alt="" />
                    <span className="birthdayText"> <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
                </div>

                <img className='rightbarAd' src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">

                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
            <>
                {user.username !== currentUser.username && (
                    <button className="rightbarFollowButton" onClick={handleClick}>
                        {followed ? "Unfollow" : "Follow"}
                        {followed ? <Remove /> : <Add />}
                    </button>
                )}
                {
                    (targetUser._id !== currentUser._id ) &&
                    <button
                        className='messageButton'
                        onClick={() => navToMessaging()}
                    >

                        Message &nbsp;
                        <Chat />
                    </button>
                }
                <h4 className='rightbarTitle'>User Information </h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">
                            {user.relationship === 1
                                ? "Single"
                                : user.relationship === 2
                                    ? "Married"
                                    : '-'}
                        </span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>User friends</h4>
                <div className='rightbarFollowings'>
                    {friends.map((friend) => (
                        <Link
                            key={friend._id}
                            to={"/profile/" + friend.username}
                            style={{ textDecoration: "none" }}
                            onClick={() => dispatch({type: "UPDATE_TARGET_USER", payload: friend})}
                        >
                            <div className='rightbarFollowing'>
                                <img
                                    src={friend.profilePic
                                        ? PF + friend.profilePic
                                        : PF + "person/noAvatar.png"
                                    }
                                    alt=""
                                    className="rightbarFollowingImg" />
                                <span className="rightbarFollowingName">{friend.username}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {user ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    )
}
