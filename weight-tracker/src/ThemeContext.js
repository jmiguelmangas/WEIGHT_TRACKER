import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'auto');

  useEffect(() => {
    const root = document.documentElement;
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (theme) => {
      if (theme === 'dark' || (theme === 'auto' && darkQuery.matches)) {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
    };

    applyTheme(theme);

    darkQuery.addEventListener('change', () => {
      if (theme === 'auto') {
        applyTheme(theme);
      }
    });

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
