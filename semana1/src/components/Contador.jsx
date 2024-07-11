import { useState } from "react"
import './Contador.css'

function Contador({valorInicial = 0, batata, batata2}) {
  // Para definir um estado usamos o useState
  // useState -> estado, função para alterar este estado
  // definimos no useState o valor inicial do estado
  // tudo que tem "use" no começo do nome é um react hook
  const [numero, setNumero] = useState(valorInicial)

  function handleIncremento() {
    // Indica ao componente que ele deve 'atualizar' para corresponder a mudança do estado
    setNumero(numero + 1)
    console.log('Evento do incremento:', numero)
  }
  
  function handleDecremento() {
    if (numero > 0) {
      setNumero(numero -1)
    }
  }

  function handleMultiplamento() {
    setNumero(numero * 2)
  }

  function handleIncrementoCem() {
    setNumero(numero + 100)
  }

  function handleZerar() {
    setNumero(0)
  }

  console.log('Atualizou')
  return (
    <section>
      <h2 className={numero % 2 === 0? "par": "impar"}>Contagem: {numero}</h2>
      <button onClick={handleIncremento}>+1</button>
      <button onClick={handleDecremento}>-1</button>
      <button onClick={handleMultiplamento}>x2</button>
      <button onClick={handleIncrementoCem}>+100</button>
      <button onClick={handleZerar}>Zerar</button>
    </section>
  )
}

export default Contador

// Para que o número mude, o componente precisa renderizar novamente
// Para fazer isso otemos o Estado -> variável especial que sincroniza as mudanças na tela

// Estado é tipo a memória do componente