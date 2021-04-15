import React, { useState, createContext } from 'react'

export const userContext = createContext()

export const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState('');

  return(
    <userContext.Provider value={{ user, setUser }}>
      { children }
    </userContext.Provider>
  )
}
