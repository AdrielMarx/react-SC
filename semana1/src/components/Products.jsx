import './Products.css'

function Products (props) {
  let mensagem1
  let mensagem2
  let precoDesconto
  // let precoOriginal = props.precoOriginal

  if (props.desconto > 0) {
    precoDesconto = props.precoOriginal - props.precoOriginal * (props.desconto / 100)
    mensagem1 = props.precoOriginal
    mensagem2 = `${precoDesconto}R$ (- ${props.desconto}%)`
  } 

  return (
    
    <main>
      <h3 id="nome_produto">{props.nomeProduto}</h3>
      <h4 id="preco_original">{!props.desconto > 0 && `${props.precoOriginal}R$`}</h4>
      <h4 id='preco_antigo'>{mensagem1}</h4>
      <h4 id="preco_desconto">{mensagem2}</h4>
    </main>
  )
}

export default Products