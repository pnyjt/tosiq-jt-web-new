import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("black")
  return (
    <div>
      <h1>React color changer; useState()</h1>
      <div className='clr-btns'>
        <button onClick={()=> setColor("red")}>Red</button> | <button onClick={()=> setColor("green")}>Green</button> | <button onClick={()=> setColor("blue")}>Blue</button> | <button onClick={()=> setColor("#696FC7")}>Purple</button> | <button onClick={()=> setColor("black")}>Reset</button>
      </div>
      <div style={{backgroundColor: color}} className='clr-box'></div>
    </div>
  )
}

export default App