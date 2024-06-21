import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import EntitySelector from './EntitySelector';
import WeightChart from './WeightChart';
import { ChromePicker } from 'react-color';
import './ViewData.css';

function ViewData({ refresh, setRefresh, selectedEntity, setSelectedEntity }) {
  const [data, setData] = useState([]);
  const [secondEntity, setSecondEntity] = useState('');
  const [secondData, setSecondData] = useState([]);
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);
  const [firstColor, setFirstColor] = useState('#FF0000');
  const [secondColor, setSecondColor] = useState('#0000FF');
  const [showFirstColorPicker, setShowFirstColorPicker] = useState(false);
  const [showSecondColorPicker, setShowSecondColorPicker] = useState(false);


  const fetchData = async (entity, setDataFunction) => {
    if (!entity) {
      setDataFunction([]);
      return;
    }

    try {
      const response = await axios.get(`http://127.0.0.1:5000/data?nombre=${entity}`);
      if (response.data.length > 0) {
        const sortedData = response.data[0].pesos.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
        setDataFunction(sortedData);
      } else {
        setDataFunction([]);
      }
    } catch (error) {
      console.error(error);
      alert('Error fetching data');
    }
  };

  useEffect(() => {
    fetchData(selectedEntity, setData);
  }, [selectedEntity, refresh]);

  useEffect(() => {
    fetchData(secondEntity, setSecondData);
  }, [secondEntity]);

  const handleCompareClick = () => {
    if (!selectedEntity) {
      alert('Please select the first entity to compare.');
      return;
    }

    if (showSecondDropdown) {
      setSecondEntity('');
      setSecondData([]);
    }

    setShowSecondDropdown(!showSecondDropdown);
  };

  return (
    <div className="view-data">
      <h2>View Data</h2>
      <EntitySelector selectedEntity={selectedEntity} setSelectedEntity={setSelectedEntity} refresh={refresh} />
      <div>
        <h3>{selectedEntity}</h3>
        <button onClick={() => setShowFirstColorPicker(!showFirstColorPicker)}>
          Select Color
        </button>
        {showFirstColorPicker && (
          <ChromePicker color={firstColor} onChangeComplete={(color) => setFirstColor(color.hex)} />
        )}
        <div
          style={{
            width: '24px',
            height: '24px',
            backgroundColor: firstColor,
            display: 'inline-block',
            marginLeft: '10px',
          }}
        ></div>
        <ul>
          {data.map((peso, idx) => (
            <li key={idx}>
              {format(parseISO(peso.fecha), 'dd/MM/yyyy')} - {peso.peso} kg
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleCompareClick}>
        {showSecondDropdown ? 'Stop Comparing' : 'Compare with another entity'}
      </button>
      {showSecondDropdown && (
        <div>
          <EntitySelector selectedEntity={secondEntity} setSelectedEntity={setSecondEntity} refresh={refresh} />
          <button onClick={() => setShowSecondColorPicker(!showSecondColorPicker)}>
            Select Color
          </button>
          {showSecondColorPicker && (
            <ChromePicker color={secondColor} onChangeComplete={(color) => setSecondColor(color.hex)} />
          )}
          <div
            style={{
              width: '24px',
              height: '24px',
              backgroundColor: secondColor,
              display: 'inline-block',
              marginLeft: '10px',
            }}
          ></div>
        </div>
      )}

      <div>
        {(data.length > 0 || (showSecondDropdown && secondData.length > 0)) && (
          <WeightChart
            data={data}
            secondData={showSecondDropdown ? secondData : []}
            color={firstColor}
            secondColor={secondColor}
            firstEntityName={selectedEntity}
            secondEntityName={secondEntity}
          />
        )}
      </div>
    </div>
  );
}

export default ViewData;
