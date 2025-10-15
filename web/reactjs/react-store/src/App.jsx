import React from 'react'
import UserData from './components/UserData'
import { useContext } from 'react'
import { MyContext } from './store/ContextStore'

const App = () => {
  const data = useContext(MyContext)
  return (
    <div>
      
      App
      <div>
        <button onClick={data.toggle}>Show / Hide</button>
        {
          data.value ? 
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vel tenetur magni consequatur, magnam minus dicta eum exercitationem libero odit cupiditate eligendi saepe quia consequuntur enim tempora iusto repellendus? Voluptate!
          </p> : ""
        }
      </div>
      <UserData name={data.name}>
        <h1>This is my age: {data.age}</h1>
      </UserData>
    </div>
  )
}

export default App