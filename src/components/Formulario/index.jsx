import { useState } from "react";

import styles from "./Formulario.module.css";

const CalcularIMC = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState();

  const calcular = (e) => {
    e.preventDefault();

    if (!altura || !peso) {
      alert("Preencha todos os campos");
      return;
    }

    const alturaEmMetros = parseFloat(altura);
    const pesoEmKg = parseFloat(peso);

    if (alturaEmMetros <= 0 || pesoEmKg <= 0) {
      alert("Altura e peso devem ser maiores que zero");
      return;
    }

    const imc = pesoEmKg / (alturaEmMetros * alturaEmMetros);
    setResultado(imc.toFixed(2));
  };

  return (
    <div className={styles.dados}>
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcular}>
        <div>
          <label>Altura (m): </label>
          <input placeholder="Ex.: 1.60 m" type="number" step="0.01" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </div>
        <div>
          <label>Peso (kg): </label>
          <input placeholder="Ex: 70.5 kg" type="number" step="0.1" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>

      {resultado && (
        <div>
          <p>Seu IMC é {resultado}</p>
          <p>
            {resultado < 18.5
              ? "Seu IMC indica que você está abaixo do peso."
              : resultado < 25
              ? "Seu IMC está dentro da faixa considerada saudável."
              : resultado < 30
              ? "Seu IMC indica que você está um pouco acima do peso ideal."
              : resultado < 35
              ? "Seu IMC indica obesidade grau I."
              : resultado < 40
              ? "Seu IMC está na faixa de obesidade grau II."
              : "Seu IMC indica obesidade mórbida."}
          </p>
        </div>
      )}
    </div>
  );
};

export default CalcularIMC;