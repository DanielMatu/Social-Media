import './login.css'
import { useRef, useContext } from 'react'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import { CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Login() {
    const email = useRef()
    const password = useRef()
    const { user, isFetching, error, dispatch } = useContext(AuthContext)
    const handleClick = (e) => {
        e.preventDefault()
        loginCall({ email: email.current.value, password: password.current.value }, dispatch)
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
                        <input placeholder="Email" type='email' className='loginInput' ref={email} />
                        <input required placeholder="Password" type='password' minLength="6" className='loginInput' ref={password} />
                        <button className="loginButton" disabled={isFetching}>
                            {isFetching ? <CircularProgress color='white' size="20px" /> : "Log in"}
                        </button>
                        <span className='loginForgot'>Forgot password?</span>
                        <Link to='/register' className='linkToLogin'>
                            <button className="loginRegisterButton" disabled={isFetching}>
                                {isFetching ? <CircularProgress color={'white'} size="20px" /> : "Create a New Account"}
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
