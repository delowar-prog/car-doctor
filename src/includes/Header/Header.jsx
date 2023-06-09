import { useContext } from 'react';
import Logo from '../../assets/logo.svg'
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
const Header = () => {
    const {user, userLogout}=useContext(AuthContext)
    const handleLogout=()=>{
        userLogout().then(()=>{
            localStorage.removeItem('car-doctors-access')
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            {user?.email?<li><button>Logout</button></li>:
                            <li><Link to="/login">Login</Link></li>}
                        </ul>
                    </div>
                    <img src={Logo}></img>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-8 font-semibold">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    {user?.email?<>
                        <li><Link to="/orders">My Orders</Link></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                        </>:
                    <li><Link to="/login">Login</Link></li>}
                    </ul>
                </div>
                <div className="navbar-end">
                <Link><BsBag className='text-lg mr-2'></BsBag></Link>
                <Link><AiOutlineSearch className='text-xl mr-3'></AiOutlineSearch></Link>
                <Link to="/login"><button className="btn btn-outline btn-secondary">Appointment</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Header