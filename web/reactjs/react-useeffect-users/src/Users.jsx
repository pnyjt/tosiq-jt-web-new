import React, { useEffect, useState } from 'react'
import UserCard from './components/userCard'
import { ScaleLoader } from 'react-spinners'
const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const getUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const userData = await response.json();

            if (!userData) {
                console.log("Users not showing")
            } else {
                setUsers(userData);
                setIsLoading(false)
            }
        }
        getUsers();
    })
    

  return (
    <div className='m-4'>
        <div className='text-3xl'>User List</div>
        <div className='mt-4'>
            <input 
            className='w-[300px] py-1 px-3 bg-purple-100 rounded focus:outline-none border border-purple-500'
            type="text" placeholder='Search here' />
        </div>
        <div className='my-4'>
            {isLoading ? 
            <ScaleLoader color="purple" /> :
            <div>
                {users.length > 0 ?
                <div className='mt-5 grid grid-cols-12 gap-3'>
                    {users.map((user, i)=> {
                        return (
                            <div key={i} className='col-span-4'>
                                <UserCard user={user}/>
                            </div>
                        )
                    })}
                </div> : "No users were found!"  
                }
            </div>
            }
        </div>
    </div>
  )
}

export default Users