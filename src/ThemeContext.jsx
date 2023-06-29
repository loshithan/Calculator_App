import React, { createContext, useState } from 'react';

// Create the theme context
const ThemeContext = createContext();

// Create the theme provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeValues = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeValues}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
