let victor = { // instância
    nome: 'victor araujo',
    idade: '26',
    descrever: function (){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }
}

class Pessoa{ // classe
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) { 
        this.nome = nome // o mesmo dos parâmetros
        this.idade = idade
        this.anoDeNascimento = 2023 - idade;
    } 

    descrever(){ // para declarar um método eu não preciso colocar a palavra function, só o nome da função
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    } 
}

//  const maria = new Pessoa();
// maria.nome = 'Maria do Carmo';
// maria.idade = 35;

// const joao = new Pessoa();
// joao.nome = 'João das Neves'
// joao.idade = 28

// console.log(maria)
// console.log(joao)

// maria.descrever()

const paulo = new Pessoa('Paulo Souza', 33)

console.log(paulo)

// function compararPessoas(p1, p2){ //NOTE! É uma função recebendo um objeto como parâmetro
//     if (p1.idade > p2.idade) {
//         console.log(`${p1.nome} é mais velho que ${p2.nome}`)
//     } else if (p2.idade > p1.idade){
//         console.log(`${p2.nome} é mais velho que ${p1.nome}`)
//     } else {
//         console.log(`${p1.nome} é da mesma idade que ${p2.nome}`)
//     }
// }

let maria = new Pessoa('Maria do Carmo', 35);

let joao = new Pessoa('João das Neves', 28);

// compararPessoas(maria, joao)

// Note! Nós temos uma classe que só é utilizada uma vez, em seguida temos outras funções que estão utilizando um atributo dessa classe. Tudo com muito menos código 

console.log(Pessoa)