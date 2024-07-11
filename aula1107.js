// Desestruturação de objetos: permite extrair valores de um objeto e atribuir em variáveis 

const pessoa = {
  nome: 'João',
  idade: 20,
  profissao: 'Desenvolvedor',
  endereco: {
    cidade: 'Brasília',
    estado: 'Distrito Federal'
  }
}

// DEntro das chaves coloca-se as propriedades que serão extraídas
const {nome, idade, profissao, endereco} = pessoa
console.log(nome)
console.log(idade)
console.log(profissao)
console.log(endereco)

// Podemos extrair propriedades de objetos internos
const {endereco: {cidade}} = pessoa
console.log(cidade)

// Spread: permite espalhar as propriedades de um objeto em outro

const carro = {
  marca: 'BMW',
  modelo: '320i',
  ano: 2020
}

const copiaCarro = {...carro}
// As propriedades do objeto carro seão "copiadas" para este novo objeto
console.log(copiaCarro)

const novoCarro = {...carro, ano: 2024, dono: 'Gabriel'}
console.log(novoCarro)