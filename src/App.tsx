import React from 'react';
import logo from './logo.svg';
import './App.css';
import Office from './components/ducklings/Office';
import Countdown from './components/countdown/Countdown';

function App() {
  return (
    <div className="App">
      <Countdown />
      <Office />
    </div>
  );
}

export default App;
