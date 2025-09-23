import React from 'react'
import userList from '../utils/users.js'
import UserCard from '../components/UserCard.jsx'
const UsersList = () => {
  return (
    <>
    <div className='m-4 text-2xl text-green-300'>
        User Data
    </div>
    { userList.length > 0 ?
    <div className='grid grid-cols-12'>
        {userList.map(({id, name, profile, userName})=>{
            return (
                <div className='m-2 col-span-4'>
                    <UserCard 
                        id={id}
                        name={name}
                        profile={profile}
                        username={userName}
                    />
                </div>
            )
        })}
    </div> : "No records found!"
    }
    </>
  )
}

export default UsersList