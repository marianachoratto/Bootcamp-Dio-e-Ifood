// const lista = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]

// const listaPar = lista.filter((item) => {
//     return item % 2 == 0
// })

// console.log(listaPar)

//--------------------------------------
// class Pessoa {
//     constructor (nome){
//         this.nome = nome 
//     }
// }

// const listaDeNomes = [new Pessoa('renan'), new Pessoa('maria'), new Pessoa('josephine')]

// const novaLista = listaDeNomes.map((elemento) => {
//     return elemento.nome
// })

// console.log(novaLista)
//------------------------------------

// const lista = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]

// const listaDoReduce = lista.reduce((previous, current) => {
//     return previous + current
// })

// console.log(listaDoReduce)

//--------------------------------
// const lista = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]

// console.log(lista.join('-'))
//--------------------------------

const listaDeNomes = [{nome: 'renan'}, {nome: 'maria'} , {nome: 'joana'}]

console.log(listaDeNomes.map((elemento) => elemento.nome).join('- '))