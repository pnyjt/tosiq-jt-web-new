import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import UserCard from '../components/UserCard.jsx'
import { ScaleLoader } from 'react-spinners'
import { USERS_API } from '../resources/api.js'
import { NavLink } from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isGrid, setIsGrid] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch(USERS_API)
            const userData = await response.json();

            if (!userData) {
                console.log("Users not showing")
            } else {
                setUsers(userData)
                setIsLoading(false)
            }
        }
        getUsers();
    })

  return (
    <>
      <Navbar />
      <div className='m-4 bg-white/70 p-3 rounded'>
        <div className='text-3xl'>User List</div>
        <div className='mt-4 flex items-center justify-between'>
          <div>
            <input
              className='w-[300px] py-1 px-3 bg-purple-100 rounded focus:outline-none border border-purple-500'
              type="text" placeholder='Search here' />
          </div>
          <div>
            <button onClick={() => setIsGrid(!isGrid)}>{isGrid ? "List View" : "Grid View"}</button>
          </div>
        </div>
        <div className='my-4'>
          {isLoading ?
            <ScaleLoader color="purple" /> :
            <div>
              {users.length > 0 ?
                <div className='mt-5 grid grid-cols-12 gap-3'>
                  {users.map((user, i) => {
                    return (
                      <div key={i} className={`${isGrid ? "lg:col-span-4 md:col-span-4 sm:col-span-6 max-sm:col-span-12" : "col-span-12"}`}>
                        <NavLink to={`/users/${user.id}`}>
                          <UserCard user={user} />
                        </NavLink>
                      </div>
                    )
                  })}
                </div> : "No users were found!"
              }
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Users