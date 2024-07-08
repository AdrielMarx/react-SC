// Eventos = são acões que acontecem na interface, podem ser provocados pelo usuario
// Manipulaador de evento (handler) => é uma resposta ao evento

function Eventos() {

  // Manipulador de eventos
  function handleClick() {
    alert('Você clicou!')
  }

  return (
    <section>
      <button onClick={handleClick}>Clique aqui</button>
      <button onClick={() => alert('Clicou novamente')}>Clique novamente</button>
      <h1 onMouseEnter={() => alert('OIIIIIII!!')}>passe o mouse aqui passe</h1>
    </section>
  )
}

export default Eventos