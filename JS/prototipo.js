// const pessoa = {
//     genero: 'masculino'
// }

// const renan = {
//     nome: 'renan', 
//     idade: 30, 
//     __proto__: pessoa
// }

// console.log(renan.genero)

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade 
}

Pessoa.prototype. falar = function (){
    console.log(`meu nome é ${this.nome}` )
}

Object.prototype(pessoa)

const renan = new Pessoa('renan', 30)

renan.falar()