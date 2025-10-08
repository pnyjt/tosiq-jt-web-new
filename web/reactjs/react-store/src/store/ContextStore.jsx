import React from 'react'
import { createContext } from 'react'

export const MyContext = createContext();

const ContextStore = ({children}) => {
  const name = "Ahmad";
  const age = 20;
  return (
    <MyContext.Provider value={{name, age}}>
      {children}
    </MyContext.Provider>
  )
}

export default ContextStore