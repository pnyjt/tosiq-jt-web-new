import React from 'react'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoGlobeOutline } from "react-icons/io5";

const UserCard = ({ user }) => {
    return (
        <div className='bg-white/60 p-3 rounded shadow'>
            <div className='flex items-start justify-between'>
                <div>
                    {user.name}
                    <span className='block text-[11px] text-gray-600'>
                        <MdOutlineAlternateEmail className='inline -mt-1 mr-1'/>
                        {user.email}
                    </span>
                </div>
                <div className='p-1 lowercase border border-purple-500 rounded-full text-[10px] bg-purple-500/30'>@{user.username}</div>
            </div>

            <div className='mt-4 text-xs'>Personal</div>
            <div className='mt-1 bg-white p-1 rounded'>
                <div className='text-xs text-gray-800'>
                    <GrMapLocation className='inline -mt-1 mr-2'/> 
                    {user.address.street}, {user.address.city}
                </div>
                <div className='mt-1 text-xs text-gray-800'>
                    <FiPhone className='inline -mt-1 mr-2'/>
                    {user.phone}
                </div>
            </div>
            
            <div className='mt-4 text-xs'>Business</div>
            <div className='mt-1 bg-white p-1 rounded'>
                <div className='text-xs text-gray-800'>
                    <HiOutlineBuildingOffice2 className='inline -mt-1 mr-2'/> 
                    {user.company.name}
                </div>
                <div className='mt-1 text-xs text-gray-800'>
                    <IoGlobeOutline className='inline -mt-1 mr-2'/>
                    {user.website}
                </div>
            </div>
        </div>
    )
}

export default UserCard