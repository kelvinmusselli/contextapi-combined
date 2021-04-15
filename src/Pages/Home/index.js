import React, { useContext, useEffect } from 'react';
import { userContext } from '../../contexts/hooks/userContext';
import { phraseContext } from '../../contexts/hooks/phraseContext';

export default function Home() {
  const { user, setUser } = useContext(userContext);
  const { phrase, setPhrase } = useContext(phraseContext);

  useEffect(()=> {
    setUser('Kelvin');
    setPhrase('Combinando contexts');

  },[setPhrase, setUser]);

  return (
    <>
      <h1>Olá, Mundo!</h1>
      {user}
      <br/>
      Frase: {phrase}
    </>
    )
}
