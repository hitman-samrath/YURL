import { Link } from 'react-router-dom'
import './App.css'

const Header = () => {
    const clearToken=()=>{
        localStorage.setItem("jwt","")
    }

    return (
        <header className='w-full flex justify-between bg-yellow-400 text-white font-tnr font-bold p-3'>
            <Link to="/" className='cursor-pointer text-3xl text-center md:text-left md:ml-28 md:mr-28'>YouRL</Link>
            <div className='flex justify-items-end text-right text-xl'>
                <Link to="/login" onClick={clearToken} className='ml-5 mr-14 cursor-pointer'>Logout</Link>
            </div>
        </header>
        
    )
}

export default Header