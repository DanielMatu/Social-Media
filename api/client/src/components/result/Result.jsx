import './result.css'
import { useHistory } from 'react-router-dom'

export default function Result({ name, profilePic, result }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const history = useHistory()

    const computeProfileUrl = () => {
        const prefix = '/profile/'
        const partsOfName = name.split(' ')
        let urlName = ''
        partsOfName.map((part) => {
            urlName += part + "%20"
        })
        const combinedUrl = prefix + urlName
        let finalUrl = combinedUrl.slice(0, -3)
        return finalUrl
    }

    return (

        <div className='resultContainer' onClick={() =>
            history.push({
                pathname: computeProfileUrl(),
                state: result
            })
        }>
            <img
                src={
                    profilePic
                        ? PF + profilePic
                        : PF + "person/noAvatar.png"

                }
                className="resultImg"
            ></img>
            <div className="resultName">
                {name}
            </div>
        </div>
    )
}