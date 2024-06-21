import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ModifyEntity.css';

function ModifyEntity({ refresh, setRefresh }) {
  const [entities, setEntities] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: 'persona',
    sexo: '',
    altura: '',
    edad: '',
    raza: ''
  });

  useEffect(() => {
    const fetchEntities = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/data');
        setEntities(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEntities();
  }, [refresh]);

  const handleSelectChange = (e) => {
    const entityName = e.target.value;
    const entity = entities.find(ent => ent.nombre === entityName);
    setSelectedEntity(entity);

    if (entity) {
      setFormData({
        nombre: entity.nombre,
        tipo: entity.tipo,
        sexo: entity.sexo,
        altura: entity.tipo === 'persona' ? entity.altura : '',
        edad: entity.tipo === 'persona' ? entity.edad : '',
        raza: entity.tipo === 'perro' ? entity.raza : ''
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDiscard = () => {
    if (selectedEntity) {
      setFormData({
        nombre: selectedEntity.nombre,
        tipo: selectedEntity.tipo,
        sexo: selectedEntity.sexo,
        altura: selectedEntity.tipo === 'persona' ? selectedEntity.altura : '',
        edad: selectedEntity.tipo === 'persona' ? selectedEntity.edad : '',
        raza: selectedEntity.tipo === 'perro' ? selectedEntity.raza : ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put('http://127.0.0.1:5000/modify-entity', {
        nombre_actual: selectedEntity.nombre,
        nombre_nuevo: formData.nombre,
        tipo: formData.tipo,
        sexo: formData.sexo,
        altura: formData.tipo === 'persona' ? formData.altura : '',
        edad: formData.tipo === 'persona' ? formData.edad : '',
        raza: formData.tipo === 'perro' ? formData.raza : ''
      });
      alert('Entity updated successfully');
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
      alert('Error updating entity');
    }
  };

  return (
    <div className="modify-entity">
      <h2>Modify Entity</h2>
      <div className="form-group">
        <label>Select Entity:</label>
        <select onChange={handleSelectChange} value={selectedEntity ? selectedEntity.nombre : ''}>
          <option value="" disabled>Select an entity</option>
          {entities.map((entity, idx) => (
            <option key={idx} value={entity.nombre}>{entity.nombre}</option>
          ))}
        </select>
      </div>
      {selectedEntity && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Type:</label>
            <select name="tipo" value={formData.tipo} onChange={handleChange}>
              <option value="persona">Persona</option>
              <option value="perro">Perro</option>
            </select>
          </div>
          <div className="form-group">
            <label>Sexo:</label>
            <input type="text" name="sexo" value={formData.sexo} onChange={handleChange} required />
          </div>
          {formData.tipo === 'persona' && (
            <>
              <div className="form-group">
                <label>Altura (cm):</label>
                <input type="number" name="altura" value={formData.altura} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Edad:</label>
                <input type="number" name="edad" value={formData.edad} onChange={handleChange} required />
              </div>
            </>
          )}
          {formData.tipo === 'perro' && (
            <div className="form-group">
              <label>Raza:</label>
              <input type="text" name="raza" value={formData.raza} onChange={handleChange} required />
            </div>
          )}
          <div className="buttons">
            <button type="button" onClick={handleDiscard}>Discard Changes</button>
            <button type="submit">Save Changes</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ModifyEntity;
