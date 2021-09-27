import axios from 'axios'


const getAxiosInstance = () => {
    if (process.env.NODE_ENV === 'development') {
        console.log('it was dervelo')
        return axios.create({
            baseURL: 'http://localhost:8800/api/'
        })
    } else {
        console.log('it was productoin')
        return axios.create({
            baseURL: "https://dmatu-social-media.herokuapp.com/api/"
        })
    }
}

const axiosInstance = getAxiosInstance()
console.log('hers axios instance')
console.log(axiosInstance)


export { axiosInstance }