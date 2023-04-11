import React, { useState, useEffect } from 'react';
import './App.css';
import clickSound from './sound.mp3';

function App() {
  const [count, setCount] = useState(
    Number(localStorage.getItem('count') || 0)
  );

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <div className="container">
      <h1 className="title">TURN YOUR SOUND UP!</h1>
      <h1 className="title">Count: {count}</h1>
      <button className="btn" onClick={handleClick}>
        <span>Click me!</span>
      </button>
    </div>
  );
}

export default App;
