import React, { useState } from 'react';
import Weather from './components/Weather';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <header>
        <h1>Weather App</h1>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <Weather />
    </div>
  );
}

export default App;
