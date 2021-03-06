import { useRef, useEffect, useContext } from 'react'
import './register.css'
import { axiosInstance } from '../../config'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import { dispatch } from '../../context/AuthContext'

export default function Register() {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const history = useHistory()
    const { dispatch } = useContext(AuthContext)

    const handleClick = async (e) => {
        e.preventDefault()
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                await axiosInstance.post('/auth/register', user)
                loginCall({email:email.current.value, password:password.current.value}, dispatch)

                history.push("/login")
            } catch (err) {
                // finish notes - add unique validation
                console.log(err)
            }
        }
    }
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Lamasocial</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className='loginInput' />
                        <input placeholder="Email" type="email" required ref={email} className='loginInput' />
                        <input placeholder="Password" type="password" required minLength="6" ref={password} className='loginInput' />
                        <input placeholder="Password Again" type="password" required ref={passwordAgain} className='loginInput' />
                        <button className="loginButton">Sign Up</button>
                        <Link to="/login" className='loginRegisterLink'>
                            <button type="submit" className="loginRegisterButton">
                                Log into Account
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
