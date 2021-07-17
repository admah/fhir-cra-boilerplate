import React, {useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useSmartLaunch from './hooks/useSmartLaunch';

const App: React.FC = () => {
  const fhirClient = useSmartLaunch();
  console.log("🚀 ~ file: App.tsx ~ line 8 ~ fhirClient", fhirClient)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
