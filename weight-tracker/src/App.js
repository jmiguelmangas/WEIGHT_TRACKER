import React, { useState } from 'react';
import RegisterEntity from './components/RegisterEntity';
import AddWeightRecord from './components/AddWeightRecord';
import ViewData from './components/ViewData';
import ModifyEntity from './components/ModifyEntity';
import DeleteEntity from './components/DeleteEntity';
import ModifyWeightRecord from './components/ModifyWeightRecord';

function App() {
  const [refresh, setRefresh] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState('');

  return (
    <div className="App">
      <h1>Weight Tracker</h1>
      <RegisterEntity refresh={refresh} setRefresh={setRefresh} />
      <AddWeightRecord refresh={refresh} setRefresh={setRefresh} />
      <ViewData refresh={refresh} setRefresh={setRefresh} selectedEntity={selectedEntity} setSelectedEntity={setSelectedEntity} />
      <ModifyEntity refresh={refresh} setRefresh={setRefresh} />
      <ModifyWeightRecord refresh={refresh} setRefresh={setRefresh} />
      <DeleteEntity refresh={refresh} setRefresh={setRefresh} setSelectedEntity={setSelectedEntity} />
    </div>
  );
}

export default App;
