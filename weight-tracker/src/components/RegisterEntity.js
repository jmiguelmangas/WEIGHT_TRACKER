import React, { useState } from 'react';
import axios from 'axios';
import './RegisterEntity.css';

function RegisterEntity({ refresh, setRefresh }) {
  const [entityType, setEntityType] = useState('persona');
  const [nombre, setNombre] = useState('');
  const [sexo, setSexo] = useState('');
  const [altura, setAltura] = useState('');
  const [edad, setEdad] = useState('');
  const [raza, setRaza] = useState('');
  const [pesoActual, setPesoActual] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEntity = {
      nombre,
      tipo: entityType,
      sexo,
      peso_actual: parseFloat(pesoActual),
    };

    if (entityType === 'persona') {
      newEntity.altura = parseFloat(altura);
      newEntity.edad = parseInt(edad);
    } else if (entityType === 'perro') {
      newEntity.raza = raza;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/register', newEntity);
      alert(response.data.message);
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
      alert('Error registering entity');
    }
  };

  return (
    <div>
      <h2>Register Entity</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Entity Type:
            <select value={entityType} onChange={(e) => setEntityType(e.target.value)}>
              <option value="persona">Persona</option>
              <option value="perro">Perro</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Sexo:
            <input type="text" value={sexo} onChange={(e) => setSexo(e.target.value)} required />
          </label>
        </div>
        {entityType === 'persona' && (
          <>
            <div>
              <label>
                Altura (cm):
                <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} required />
              </label>
            </div>
            <div>
              <label>
                Edad:
                <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} required />
              </label>
            </div>
          </>
        )}
        {entityType === 'perro' && (
          <div>
            <label>
              Raza:
              <input type="text" value={raza} onChange={(e) => setRaza(e.target.value)} required />
            </label>
          </div>
        )}
        <div>
          <label>
            Peso Actual (kg):
            <input type="number" step="0.1" value={pesoActual} onChange={(e) => setPesoActual(e.target.value)} required />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterEntity;
