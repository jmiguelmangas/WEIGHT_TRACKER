import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import EntitySelector from './EntitySelector';
import WeightChart from './WeightChart';

function ViewData({ refresh, setRefresh, selectedEntity, setSelectedEntity }) {
  const [data, setData] = useState([]);

  const fetchData = async (entity) => {
    if (!entity) {
      setData([]);
      return;
    }

    try {
      const response = await axios.get(`http://127.0.0.1:5000/data?nombre=${entity}`);
      if (response.data.length > 0) {
        const sortedData = response.data[0].pesos.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
        setData(sortedData);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error(error);
      alert('Error fetching data');
    }
  };

  useEffect(() => {
    fetchData(selectedEntity);
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
              {format(parseISO(peso.fecha), 'dd/MM/yyyy')} - {peso.peso} kg
            </li>
          ))}
        </ul>
        {data.length > 0 && <WeightChart data={data} />}
      </div>
    </div>
  );
}

export default ViewData;
