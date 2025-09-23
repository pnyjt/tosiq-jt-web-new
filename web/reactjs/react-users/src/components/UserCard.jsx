import React from 'react'
import { FaMessage, FaUserPlus  } from "react-icons/fa6";
import noImg from '../assets/images/users/no-img.png';

const UserCard = ({ name, profile, username }) => {
  return (
    <div className='card'>
        <div className='profile-img'>
          <img src={profile == null ? noImg : profile} alt="" />
        </div>
        <h3 className='text-2xl'>{name}</h3>
        <p>{username}</p>
        <button> 
          <FaMessage className='inline mt-[-3px]' /> Send Message
        </button> {" "}
        <button>
          <FaUserPlus className='inline mt-[-3px]' /> Add Friend
        </button>
    </div>
  )
}

export default UserCard