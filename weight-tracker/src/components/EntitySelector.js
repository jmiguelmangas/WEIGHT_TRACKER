import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EntitySelector({ selectedEntity, setSelectedEntity, refresh }) {
  const [entities, setEntities] = useState([]);

  const fetchEntities = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/data');
      setEntities(response.data.map(entidad => entidad.nombre));
    } catch (error) {
      console.error('Error fetching entities:', error);
    }
  };

  useEffect(() => {
    fetchEntities();
  }, [refresh]);

  return (
    <select value={selectedEntity} onChange={(e) => setSelectedEntity(e.target.value)}>
      <option value="" disabled>Select an entity</option>
      {entities.map((nombre, index) => (
        <option key={index} value={nombre}>{nombre}</option>
      ))}
    </select>
  );
}

export default EntitySelector;
