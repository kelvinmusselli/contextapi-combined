import React, { useState, createContext } from 'react'

export const phraseContext = createContext()

export const PhraseContextProvider = ({ children }) => {

  const [phrase, setPhrase] = useState('');

  return(
    <phraseContext.Provider value={{ phrase, setPhrase }}>
      { children }
    </phraseContext.Provider>
  )
}
