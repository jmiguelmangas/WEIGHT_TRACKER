import React, { useState } from 'react';
import axios from 'axios';
import EntitySelector from './EntitySelector';

function ModifyEntity({ refresh, setRefresh }) {
  const [selectedEntity, setSelectedEntity] = useState('');
  const [nombreNuevo, setNombreNuevo] = useState('');

  const handleModifyEntity = async () => {
    try {
      const response = await axios.put('http://127.0.0.1:5000/modify-entity', { nombre_actual: selectedEntity, nombre_nuevo: nombreNuevo });
      alert(response.data.message);
      setSelectedEntity('');
      setNombreNuevo('');
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
      alert('Error modifying entity name');
    }
  };

  return (
    <div>
      <h2>Modify Entity Name</h2>
      <EntitySelector selectedEntity={selectedEntity} setSelectedEntity={setSelectedEntity} refresh={refresh} />
      <input
        type="text"
        value={nombreNuevo}
        onChange={(e) => setNombreNuevo(e.target.value)}
        placeholder="New Name"
      />
      <button onClick={handleModifyEntity}>Modify Name</button>
    </div>
  );
}

export default ModifyEntity;
