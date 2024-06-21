import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from './ThemeContext';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState('');

  return (
    <ThemeProvider>
      <div className="App">
        <Dashboard 
          refresh={refresh} 
          setRefresh={setRefresh} 
          selectedEntity={selectedEntity} 
          setSelectedEntity={setSelectedEntity} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
