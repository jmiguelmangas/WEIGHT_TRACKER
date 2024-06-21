import React, { useState } from 'react';
import axios from 'axios';
import EntitySelector from './EntitySelector';
import './ModifyWeightRecord.css'

function ModifyWeightRecord({ refresh, setRefresh }) {
  const [selectedEntity, setSelectedEntity] = useState('');
  const [fecha, setFecha] = useState('');
  const [pesoNuevo, setPesoNuevo] = useState('');

  const handleModifyWeight = async () => {
    try {
      const response = await axios.put('http://127.0.0.1:5000/modify-weight', { nombre: selectedEntity, fecha, peso_nuevo: pesoNuevo });
      alert(response.data.message);
      setSelectedEntity('');
      setFecha('');
      setPesoNuevo('');
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
      alert('Error modifying weight record');
    }
  };

  return (
    <div>
      <h2>Modify Weight Record</h2>
      <EntitySelector selectedEntity={selectedEntity} setSelectedEntity={setSelectedEntity} refresh={refresh} />
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        placeholder="Date"
      />
      <input
        type="number"
        value={pesoNuevo}
        onChange={(e) => setPesoNuevo(e.target.value)}
        placeholder="New Weight"
      />
      <button onClick={handleModifyWeight}>Modify Weight</button>
    </div>
  );
}

export default ModifyWeightRecord;
