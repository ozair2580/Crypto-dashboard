import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";

const TopNav = () => {
    return (
        <div className='flex shadow-inner items-center text-[28px] w-[1184px] h-[64px] flex-wrap justify-around'>
            <h1></h1>
            <FaRegCircleUser className='w-12 h-12  shadow-sm'/>
        </div>
    );
};

export default TopNav;