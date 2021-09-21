import './results.css'
import Result from '../result/Result'

export default function Results({ results }) {

    return (
        <div className='results'>
            <div className='resultsWrapper'>
                { Object.keys(results).length === 0 && <div> Sorry, we couldn't find anyone with that username</div>}
                {results.map((result) => {
                    return (
                        <>
                        <Result name={result.username} profilePic={result.profilePic}  />
                        </>

                    )
                })}
            </div>
        </div>
    )
}