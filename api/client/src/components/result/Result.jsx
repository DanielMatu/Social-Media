import './result.css'

export default function Result({name, profilePic}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        
        <div className='resultContainer'>
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