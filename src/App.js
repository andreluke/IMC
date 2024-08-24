import "./App.css";
import { useState } from "react";
import SunnyOutline from "react-ionicons/lib/SunnyOutline";
import MoonOutline from "react-ionicons/lib/MoonOutline";

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [message, setMessage] = useState("");
  const [theme, setTheme] = useState("light");

  function calcularIMC() {
    let alt = altura / 100;
    let imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMessage("Você está abaixo do peso! Seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMessage("Você está no seu peso ideal! Seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMessage(
        "Você está levemente acima do peso! Seu IMC é: " + imc.toFixed(2)
      );
    } else if (imc >= 34.9) {
      setMessage(
        "Cuidado! Você está em obesidade! Seu IMC é: " + imc.toFixed(2)
      );
    }
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={`App ${theme}`}>
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC!</span>
      <div className="area-input">
        <input
          type="number"
          placeholder="Peso em Kg (Exemplo: 70kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="number"
          placeholder="Altura em cm (Exemplo: 180)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={calcularIMC}>Calcular</button>
        <h2>{message}</h2>
      </div>
      {theme === "light" ? (
        <button className="theme-button" onClick={toggleTheme}>
        <SunnyOutline
          color={"#FFF"}
          title={"Modo Claro"}
          height="40px"
          width="40px"
        />
        </button>
      ) : (
        <button className="theme-button" onClick={toggleTheme}>
        <MoonOutline
          color={"#ffffff"}
          title={"Modo Escuro"}
          height="40px"
          width="40px"
        />
        </button>
      )}
    </div>
  );
}

export default App;
