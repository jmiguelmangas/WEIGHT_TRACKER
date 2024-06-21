import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="theme-toggle">
      <label>
        Theme:
        <select value={theme} onChange={handleChange}>
          <option value="auto">Auto</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </div>
  );
};

export default ThemeToggle;
