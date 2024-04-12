import React, { useState } from 'react';
import './styles.css'; // Asegúrate de tener un archivo styles.css con tus estilos personalizados

const NombreUsuario = () => {
  const [nombre, setNombre] = useState('');

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div className="nombre-usuario">
      <h2>Bienvenido, {nombre || "No definido"}</h2>
      <input
        type="text"
        placeholder="Ingrese su nombre"
        value={nombre}
        onChange={handleChange}
      />
    </div>
  );
};

export default NombreUsuario;