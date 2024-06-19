import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EntitySelector from './EntitySelector';

function ViewData({ refresh, setRefresh }) {
  const [selectedEntity, setSelectedEntity] = useState('');
  const [data, setData] = useState([]);

  const fetchData = async (entity) => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/data?nombre=${entity}`);
      if (response.data.length > 0) {
        setData(response.data[0].pesos);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error(error);
      alert('Error fetching data');
    }
  };

  useEffect(() => {
    if (selectedEntity) {
      fetchData(selectedEntity);
    }
  }, [selectedEntity, refresh]);

  return (
    <div>
      <h2>View Data</h2>
      <EntitySelector selectedEntity={selectedEntity} setSelectedEntity={setSelectedEntity} refresh={refresh} />
      <div>
        <h3>{selectedEntity}</h3>
        <ul>
          {data.map((peso, idx) => (
            <li key={idx}>
              {peso.fecha}: {peso.peso} kg
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ViewData;
