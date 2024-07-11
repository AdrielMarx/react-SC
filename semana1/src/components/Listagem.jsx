const compras = [
  'Batata palha', 'Batata frita pronta', 'Batata doce', 'Batata chips', 'Batata Inglesa', 'Batata rústica', 'Batata crua'
]

const produtos = [
  {cod: 1, nome: 'Batata palha', quantidade: 300, precoUnitario: 5},
  {cod: 2, nome: 'Batata frita pronta', quantidade: 100, precoUnitario: 10},
  {cod: 3, nome: 'Batata doce', quantidade: 3, precoUnitario: 10},
  {cod: 4, nome: 'Batata chips', quantidade: 20, precoUnitario: 4},
]

const alunos = [
  {matricula: 1, nome: 'Adriel Marx', serie: '9}', media: 8.0},
  {matricula: 2, nome: 'Messias Jorge', serie: '1º', media: 5.5},
  {matricula: 3, nome: 'Ana Maria', serie: '1º', media: 7.5},
  {matricula: 4, nome: 'Janna Engels', serie: '2º', media: 4.5},
]

// Gerar componentes/elementos a partir de dados (array)

function Listagem () {
  // Cada string no array de compras está sendo transformada em um li
  const itemcompra = compras.map((compra, index) => {
    return <li key = {index}>{compra}</li>
  })

  // O key é importante para que o react saiba remover ou adicionar o elemento na tela corretamente.
  const cardsProduto = produtos.map((produto) => {
    return (
      <article key={produto.cod}>
        <h3>Nome: {produto.nome}</h3>
        <p>Quantidade: {produto.quantidade}</p>
        <p>Subtotal: {produto.quantidade * produto.precoUnitario}</p>
      </article>
    )
  })
  const cardsAluno = alunos.map((aluno) => {
    return (
      <article key={aluno.matricula}>
        <h3>Nome: {aluno.nome}</h3>
        <p>Série: {aluno.serie}</p>
        <p>Média: {aluno.media}</p>
      </article>
    )
  })
  return (
    <main>
      <h2>Lista de Compras</h2>
      <ul>
        {itemcompra}
      </ul>
      <hr />
      <h2>Lista de Produtos</h2>
      <section>
        {cardsProduto}
      </section>
      <hr />
      <h2>Lista de Alunos</h2>
      <section>
        {cardsAluno}
      </section>
    </main>
  )
}

export default Listagem