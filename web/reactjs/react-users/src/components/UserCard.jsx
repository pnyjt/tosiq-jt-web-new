import React from 'react'
import { LuMessageSquareShare, LuUserPlus } from "react-icons/lu";
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
        <LuMessageSquareShare className='inline mt-[-3px]' />
      </button>
      <span className='mx-2 border-l-1 border-l-gray-300'></span>
      <button>
        <LuUserPlus className='inline mt-[-3px]' />
      </button>
    </div>
  )
}

export default UserCard