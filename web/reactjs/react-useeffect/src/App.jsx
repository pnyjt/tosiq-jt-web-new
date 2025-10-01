import React, { useEffect, useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(1)
  const [total, setTotal] = useState(0)
  let itemPrice = 2200;

  useEffect(()=>{
    // console.log("Simple useEffect call");
    setTotal(itemPrice * counter)
  },[counter])

  useEffect(()=>{
    console.log("One time call");
  },[])

  const add = () => {
    setCounter(counter + 1)
  }
  return (
    <div>
      <h1>{itemPrice} x {counter}</h1>
      <h2>{total}</h2>
      <button onClick={add}>ADD</button>
    </div>
  )
}

export default App