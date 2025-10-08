import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import Navbar from '../components/Navbar'
import UserCard from '../components/UserCard'
import { ScaleLoader } from 'react-spinners'
import { USERS_API } from '../../../react-multipage/src/resources/api';

const UserDetail = () => {
    const params = useParams();
    const [userDetail, setUserDetail] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getUserDetail = async () => {
            // https://jsonplaceholder.typicode.com/users/1
            const response = await fetch(USERS_API + params.id)
            const userData = await response.json();

            if (!userData) {
                console.log("User Detail not showing")
            } else {
                setUserDetail(userData)
                setIsLoading(false)
            }
        }
        getUserDetail();
    })

  return (
    <>
      <Navbar />
      <div className='m-4 bg-white/70 p-3 rounded'>
        <div className='text-3xl'>User Detail</div>
        <div className='my-4'>
          {isLoading ?
            <ScaleLoader color="purple" /> :
            <div>
              <UserCard user={userDetail} />
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default UserDetail