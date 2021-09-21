import './topbar.css'
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from 'react-router-dom'
import { useContext, useRef } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { axiosInstance } from '../../config'
import { useHistory } from 'react-router-dom'

export default function Topbar() {
    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const searchbarText = useRef()
    let history = useHistory()

    const search = async (e) => {
        e.preventDefault()
        let allUsers = await axiosInstance.get('/user/users')
        let filteredUsers = []
        let partsOfName
        allUsers.data.map((u) => {
            partsOfName = u.username.split(' ')
            partsOfName.some((name) => searchbarText.current.value.includes(name)) && filteredUsers.push(u)
        })
        history.push({
            pathname: '/search',
            state: { filteredUsers }
        })

    }
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span className="logo">Lamasocial</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <form className="searchBar" onSubmit={(e) => search(e)}>
                    <Search className='searchIcon' />
                    <input ref={searchbarText} placeholder="Search for friends" className="searchInput" />
                </form>
            </div>
            <div className="topbarRight">
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>

                    <div className="topbarIconItem">
                        <Link to='/messenger'>
                            <Chat />
                        </Link>
                        <span className="topbarIconBadge">2</span>
                    </div>

                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img
                        src={
                            user.profilePic
                                ? PF + user.profilePic
                                : PF + "person/noAvatar.png"
                        }
                        alt="" className="topbarImg"
                    />
                </Link>

            </div>
        </div>
    )
}
