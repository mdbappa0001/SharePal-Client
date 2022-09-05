import React from 'react';
import logo from "../../Images/Logo.svg";


const Navbar = () => {

    

    const menuItems = <>
        {/* <li className='text-amber-300 font-bold'><Link to="/">Home</Link></li>
        <li className='text-amber-300 font-bold'><Link to="/furniture">Furniture</Link></li>
        <li className='text-amber-300 font-bold'><Link to="/blogs">Blog</Link></li> */}
        <button className="btn btn-outline lg:ml-60 hover:btn-primary"><li className='text-primary hover:text-white'>Login / Signup</li></button>
        
      

    </>

    return (
        <div className="navbar sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2  bg-white rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img  src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ml-96">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;