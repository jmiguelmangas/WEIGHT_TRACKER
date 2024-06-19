import React, { useState } from 'react';
import axios from 'axios';

function RegisterEntity({ refresh, setRefresh }) {
  const [nombre, setNombre] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/register', { nombre });
      alert(response.data.message);
      setNombre('');
      setRefresh(!refresh);  // Actualizar el estado de refresh
    } catch (error) {
      console.error(error);
      alert('Error registering entity');
    }
  };

  return (
    <div>
      <h2>Register Entity</h2>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Entity Name"
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterEntity;
