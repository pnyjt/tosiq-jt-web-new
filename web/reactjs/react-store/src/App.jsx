import React from 'react'
import UserData from './components/UserData'
import { useContext } from 'react'
import { MyContext } from './store/ContextStore'

const App = () => {
  const data = useContext(MyContext)
  return (
    <div>App
      <UserData name={data.name}>
        <h1>This is my age: {data.age}</h1>
      </UserData>
    </div>
  )
}

export default App