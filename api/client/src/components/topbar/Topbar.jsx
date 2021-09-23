import './topbar.css'
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from 'react-router-dom'
import { useContext, useRef } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { axiosInstance } from '../../config'
import { useHistory } from 'react-router-dom'

export default function Topbar() {
    const { user, dispatch } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const searchbarText = useRef()
    const searchbarTextMobile = useRef()
    let history = useHistory()

    const startNavToProfile = () => {
        dispatch({type: "UPDATE_TARGET_USER", payload: user})
        history.push('/profile/' + user.username)
    }

    const search = async (e, mobile = false) => {
        e.preventDefault()
        let allUsers = await axiosInstance.get('/user/users')
        let filteredUsers = []
        let partsOfName
        let searchbarTextValue = mobile ? searchbarTextMobile.current.value : searchbarText.current.value
        allUsers.data.map((u) => {
            partsOfName = u.username.split(' ')
            partsOfName.some((name) => searchbarTextValue.includes(name)) && filteredUsers.push(u)
        })
        history.push({
            pathname: '/search',
            state: { filteredUsers }
        })

    }
    return (
        <>
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
                            <Link to='/messenger' className='topbarIconItemLink'>
                                <Chat />
                            </Link>
                        </div>

                        <div className="topbarIconItem">
                            <Notifications />
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </div>
                    <img
                        onClick={() =>
                            startNavToProfile()
                        }
                        src={
                            user.profilePic
                                ? PF + user.profilePic
                                : PF + "person/noAvatar.png"
                        }
                        alt="" className="topbarImg"
                    />

                </div>

            </div>

            <div className="searchBarMobileContainer">
                <form className="searchBar searchBarMobile" onSubmit={(e) => search(e, true)}>
                    <input
                        ref={searchbarTextMobile}
                        placeholder="Search for friends"
                        className="searchInput"

                    />

                </form>
                <div onClick={(e) => search(e, true)} className="searchIconContainerMobile">
                    <Search className='mobileSearchIcon' />
                </div>

            </div>

        </>
    )
}
