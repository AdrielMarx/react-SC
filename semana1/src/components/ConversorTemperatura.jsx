import { useState } from "react"

function ConversorTemperatura() {
  const [celsius, setCelsius] = useState(0)
  const [fahrenheit, setFah] = useState(0)

  function handleCelsius(event) {
    const input = event.target
    const valor = input.value

    setCelsius(valor)
  }

  function handleFah() {
    const fah = celsius * 1.8 + 32
    setFah(fah)
  }

  return (
    <section>
      <h3>Conversor de Tempertaturas </h3>
      <input type="number" placeholder="Digite uma temperatura em Celsius" 
      onChange={handleCelsius}
      />
      <button onClick={handleFah}>Converter</button>
      <p>{fahrenheit.toFixed(2)}</p>
    </section>
  )
}

export default ConversorTemperatura