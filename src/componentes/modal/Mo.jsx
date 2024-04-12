import React, { useState } from 'react';
import './styles1.css'; 

const Mo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="app-container">
      <h1>Bienvenidos al curso de Multimedios</h1>
      <button onClick={handleOpenModal}>Suscribirse al boletín</button>
      {modalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Suscríbete al boletín</h2>
        <p>
          Recibe las últimas noticias y actualizaciones del curso de
          Multimedios directamente en tu correo electrónico.
        </p>
        <input type="email" placeholder="Tu correo electrónico" />
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Mo;
