import React, { useState } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <button
      className="bg-gray-800 text-white px-3 py-2 rounded-lg"
      onClick={toggleDarkMode}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
