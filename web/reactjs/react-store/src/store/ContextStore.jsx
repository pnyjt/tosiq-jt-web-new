import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const MyContext = createContext();

const ContextStore = ({children}) => {
  const [value, setValue] = useState(true);
  const name = "Ahmad";
  const age = 20;
  const toggle = () => setValue(!value)
  return (
    <MyContext.Provider value={{name, age, value, toggle}}>
      {children}
    </MyContext.Provider>
  )
}

export default ContextStore