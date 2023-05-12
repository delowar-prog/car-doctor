import Logo from '../../assets/logo.svg'

import { Link } from 'react-router-dom';
const Header2 = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Service</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <img src={Logo}></img>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-8 font-semibold">
                        <li><Link to="/" className='hover:text-red-500'>Home</Link></li>
                        <li><Link to="" className='hover:text-red-500'>About</Link></li>
                        <li><Link to="" className='hover:text-red-500'>Service</Link></li>
                        <li><Link to="" className='hover:text-red-500'>Blog</Link></li>
                        <li><Link to="" className='hover:text-red-500'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header2