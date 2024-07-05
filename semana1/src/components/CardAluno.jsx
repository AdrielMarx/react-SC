import './CardAluno.css'
function CardAluno (props) {  
  
  
  return (

    <main className='situacaoAluno'>
      <h3>Nome do aluno: {props.nomeAluno}</h3>
      <p>Série do aluno: {props.serieAluno}</p>
      <p>Média do aluno: {props.mediaAluno}</p>
      <p id="mensagemAprovado">{props.mediaAluno >= 7 && 'Situação: Aprovado'}</p>
      <p id="mensagemReprovado">{props.mediaAluno < 7 && 'Situação: Reprovado'}</p>
    </main>
  )
}
  
export default CardAluno