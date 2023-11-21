let victor = {
    nome: 'victor araujo',
    idade: '26',
    descrever: function (){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }
}

victor.descrever()
console.log(victor.nome)

console.log(victor['nome'])
console.log(victor['idade'])
victor.descrever()
console.log(victor)