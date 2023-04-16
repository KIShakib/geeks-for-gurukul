import React from 'react';
import logo from "../../../Assets/logo.png";
import user from "../../../Assets/user.png";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-20 bg-primary py-3 navbar-shadow'>
            <img className='w-16' src={logo} alt="" />
            <ul className='flex justify-center items-center gap-x-10 text-xl font-medium'>
                <li className='bg-secondary px-3 rounded-sm'>Home</li>
                <li className='bg-secondary px-3 rounded-sm'>Courses</li>
                <li className='bg-secondary px-3 rounded-sm'>Dashboard</li>
            </ul>
            <img className='w-10 h-10 outline outline-extraColor rounded-full' src={user} alt="" />
        </div>
    );
};

export default Navbar;