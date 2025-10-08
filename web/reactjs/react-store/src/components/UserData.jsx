import React from 'react'

const UserData = ({children, name}) => {
  return (
    <>
    <div>User : {name}</div>
    <div>
      {children}
    </div>
    </>
  )
}

export default UserData