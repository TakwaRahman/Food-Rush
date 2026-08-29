
import { Link, NavLink } from 'react-router';

import { FaCartShopping } from 'react-icons/fa6';
import Logo from '../Component/Logo/Logo';
import useAuth from '../Hooks/useAuth';

const Navbar = () => {

    const { user, logOut } = useAuth()

    const Li = <>
        <li ><NavLink to='/' className={({ isActive }) => `font-semibold ${isActive ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>Home</NavLink></li>
        <li ><NavLink to='/resturants' className={({ isActive }) => `font-semibold ${isActive ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>Resturants</NavLink></li>
        <li ><NavLink to='/resturants' className={({ isActive }) => `font-semibold ${isActive ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>Menu</NavLink></li>
        <li ><NavLink to='/resturants' className={({ isActive }) => `font-semibold ${isActive ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>Offers</NavLink></li>
        <li ><NavLink to='/resturants' className={({ isActive }) => `font-semibold ${isActive ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>About Us</NavLink></li>
        <li ><NavLink to='/resturants' className={({ isActive }) => `font-semibold ${isActive ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>Contact</NavLink></li>
        <li ><NavLink to='/resturants' className={({ isActive }) => `font-semibold ${isActive ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>Profile</NavLink></li>
        <li ><NavLink to='/resturants' className={({ isActive }) => `font-semibold ${isActive ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>Dashboard</NavLink></li>
        <li ><NavLink to='/add-food' className={({ isActive }) => `font-semibold ${isActive ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>Add Food</NavLink></li>




    </>


    const handleLogOut = () => {
        logOut().then(() => {
            console.log("User logged out");
        })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className=''>
            <div className="navbar bg-amber-100 shadow-sm lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3">
                            {Li}
                        </ul>
                    </div>
                    <div>
                        <Logo></Logo>
                    </div>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        {Li}
                    </ul>
                </div>



                <div className="navbar-end">
                    <div className='m-5'>
                        <FaCartShopping className='size-5 lg:size-7' />
                    </div>

                    <div className="">{
                        user ? <button className='btn bg-primary hover:bg-primary-dark text-white rounded-xl' onClick={handleLogOut}>Log Out</button> : <Link className='btn bg-primary hover:bg-primary-dark text-white rounded-xl' to='/login'>Log In</Link>
                    }</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;