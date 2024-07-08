import { useState } from "react"
import './Abas.css'

function Abas() {
  const [aba, setAba] = useState('Impacto Social')

  return (
    <section>
      <div className="botoes">
        <button className={aba === 'Impacto Social' && 'ativo'} onClick={() => setAba('Impacto Social')}>Impacto social</button>
        <button className={aba === 'Empregabilidade' && 'ativo'} onClick={() => setAba('Empregabilidade')}>Empregabilidade</button>
        <button className={aba === 'Tecnológico' && 'ativo'} onClick={() => setAba('Tecnológico')}>Tecnológico</button>
      </div> 
      {aba === 'Impacto Social' && <section>
        <h2>Impacto Social</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, deleniti!</p>
        </section>}
      {aba === 'Empregabilidade' && <section>
        <h2>Empregabilidade</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quas consequuntur, non tempora ut deserunt!</p>
        </section>}
      {aba === 'Tecnológico' && <section>
        <h2>Tecnológico</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        </section>}
    </section>
  )
}

export default Abas