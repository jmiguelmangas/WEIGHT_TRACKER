import React, { useState } from 'react';
import axios from 'axios';
import EntitySelector from './EntitySelector';

function DeleteEntity({ refresh, setRefresh }) {
  const [selectedEntity, setSelectedEntity] = useState('');

  const handleDeleteEntity = async () => {
    try {
      const response = await axios.delete('http://127.0.0.1:5000/delete-entity', { data: { nombre: selectedEntity } });
      alert(response.data.message);
      setSelectedEntity('');
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
      alert('Error deleting entity');
    }
  };

  return (
    <div>
      <h2>Delete Entity</h2>
      <EntitySelector selectedEntity={selectedEntity} setSelectedEntity={setSelectedEntity} refresh={refresh} />
      <button onClick={handleDeleteEntity}>Delete</button>
    </div>
  );
}

export default DeleteEntity;
