import axios from 'axios'

let axiosInstance

if (process.env.NODE_ENV === 'development') {
    axiosInstance = axios.create({
        baseURL: 'http://localhost:8800/api/'
    })
} else {
    axiosInstance = axios.create({
        baseURL: "https://dmatu-social-media.herokuapp.com/api/"
    })
}

export { axiosInstance }