import React from 'react'
import UserImage from './assets/images/profile.jpeg'
const Profile = () => {

  return (
    <div className='card'>
        <img src={UserImage} alt="" />
        <h3>Thomas Richard</h3>
        <p>@thomas_richard</p>
        <button>Following</button>
    </div>
  )
}

export default Profile