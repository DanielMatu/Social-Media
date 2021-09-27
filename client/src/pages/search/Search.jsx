import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Results from '../../components/results/Results'
import './search.css'
import { useLocation } from 'react-router-dom'
import '../home/home.css'

export default function Search() {
    const location = useLocation()
    const users = location.state.filteredUsers

    return (
        <>
            <Topbar/>
            <div className='searchContainer'>
                <Sidebar />
                <Results results={users} />
                <Rightbar />
            </div>

        </>
    )
}
