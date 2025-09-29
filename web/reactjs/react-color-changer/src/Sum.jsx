import React, { useRef } from 'react'

const Sum = () => {
    const no1 = useRef(null);
    const no2 = useRef(null);

    const printSum = () => {
        
        let a = no1.current.value;
        let b = no2.current.value;
        
        if (a.length == 0 || b.length == 0) {
            alert("Please enter values");
            return;
        };

        let sum = Number(a) + Number(b);
        console.log(`Sum is: ${sum}`)
    }
  return (
    <div>
        <h1>Sum of two numbers</h1>
        <label>Number 1: </label>
        <input type="number" ref={no1} placeholder='Enter value a'/> <br /><br />
        
        <label>Number 2: </label>
        <input type="number" ref={no2} placeholder='Enter value b'/> <br /><br />

        <button onClick={printSum}>Print Sum</button>
    </div>
  )
}

export default Sum