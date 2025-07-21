
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { BsHandbag } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navLink = <>
        <li><NavLink className={'text-lg font-semibold'} to={'/'}>Home</NavLink></li>
        <li><NavLink className={'text-lg font-semibold'} to={'/about'}>About</NavLink></li>
        <li><NavLink className={'text-lg font-semibold'} to={'/services'}>Services</NavLink></li>
        {
            user?.email ? <>
                <li><NavLink className={'text-lg font-semibold'} to={'/bookings'}>Bookings</NavLink></li>
                <li><button onClick={handleLogOut} className={'text-lg font-semibold'} to={'/login'}>Log Out</button></li>
            </>
                : <li><NavLink className={'text-lg font-semibold'} to={'/login'}>Login</NavLink></li>
        }

    </>

    return (
        <div className="navbar h-28 my-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLink}
                    </ul>
                </div>
                <Link to={"/"} className='btn h-full btn-ghost'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-5 menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end ">
                <div className='flex gap-5 mx-[30px]'>
                    <button className="btn shadow-md text-xl"><BsHandbag></BsHandbag></button>
                    <button className="btn shadow-md  text-xl"><BsSearch></BsSearch></button>

                </div>
                <a className="btn py-7 px-7 text-[#FF3811] border-2 bg-base-100 shadow-xl hover:bg-base-300 border-[#FF3811] text-lg font-semibold ">Appointment</a>
            </div>
        </div>
    );
};

export default NavBar;