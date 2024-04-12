import React, { useState } from 'react';
import './styles.css'; 

const Calculadora = () => {
  const [primerValor, setPrimerValor] = useState(0);
  const [segundoValor, setSegundoValor] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    setResultado(primerValor + segundoValor);
  };

  const restar = () => {
    setResultado(primerValor - segundoValor);
  };

  const reiniciar = () => {
    setPrimerValor(0);
    setSegundoValor(0);
    setResultado(0);
  };

  return (
    <div className="calculadora">
      <h2>Primer Valor: {primerValor}</h2>
      <input
        type="number"
        value={primerValor}
        onChange={(e) => setPrimerValor(parseInt(e.target.value))}
      />
      <h2>Segundo Valor: {segundoValor}</h2>
      <input
        type="number"
        value={segundoValor}
        onChange={(e) => setSegundoValor(parseInt(e.target.value))}
      />
      <div className="botones">
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={reiniciar}>Reiniciar</button>
      </div>
      <h2>Resultado: {resultado}</h2>
    </div>
  );
};

export default Calculadora;
