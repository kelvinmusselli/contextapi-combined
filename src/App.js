import React from 'react';
import { AppContextProvider } from './contexts/AppContextProvider';
import Home from './Pages/Home/index';

function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
}

export default App;
