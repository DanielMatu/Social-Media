import { useReducer, createContext } from 'react'
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
}

// const INITIAL_STATE = {
//     user: {
//         "_id": "61255f908f1180332c2c23ec",
//         "profilePic": "person/1.jpeg",
//         "coverPicture": "",
//         "followers": [],
//         "isAdmin": false,
//         "username": "jane",
//         "email": "jane@gmail.com",
//         "password": "$2b$10$6gP7EkLDBH2y4Dxl.phKHOVI6BVpiXH2DQZ14/AuTzY7IIkPNFHpC",

//         "followings": [1,2,3]
//     },
//     isFetching: false,
//     error: false
// }


export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
    

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }} >
            {children}
        </AuthContext.Provider>
    )
}