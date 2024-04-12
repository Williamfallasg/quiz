import React, { useState } from 'react';
import './styles.css'; 

const ContadorLikes = () => {
  const [likes, setLikes] = useState(0);

  const aumentarLikes = () => {
    setLikes(likes + 1);
  };

  const disminuirLikes = () => {
    setLikes(likes - 1);
  };

  return (
    <div className="contador-likes">
      <h2>Cantidad de likes {likes}</h2>
      <button onClick={aumentarLikes}>Likes</button>
      <button onClick={disminuirLikes}>Dislikes</button>
    </div>
  );
};

export default ContadorLikes;
