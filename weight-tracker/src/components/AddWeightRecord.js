import React, { useState } from 'react';
import axios from 'axios';
import EntitySelector from './EntitySelector';

function AddWeightRecord({ refresh, setRefresh }) {
  const [selectedEntity, setSelectedEntity] = useState('');
  const [fecha, setFecha] = useState('');
  const [peso, setPeso] = useState('');

  const handleAddWeight = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/add', { nombre: selectedEntity, fecha, peso });
      alert(response.data.message);
      setSelectedEntity('');
      setFecha('');
      setPeso('');
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
      alert('Error adding weight record');
    }
  };

  return (
    <div>
      <h2>Add Weight Record</h2>
      <EntitySelector selectedEntity={selectedEntity} setSelectedEntity={setSelectedEntity} refresh={refresh} />
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        placeholder="Date"
      />
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Weight"
      />
      <button onClick={handleAddWeight}>Add Weight</button>
    </div>
  );
}

export default AddWeightRecord;
