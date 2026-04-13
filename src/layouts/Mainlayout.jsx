import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';

const Mainlayout = () => {
    return (
        <div className='w-[90%] mx-auto flex flex-col gap-6'>
            <Navbar />
            <Outlet />
            <h2>footer here</h2>
        </div>
    );
};

export default Mainlayout;