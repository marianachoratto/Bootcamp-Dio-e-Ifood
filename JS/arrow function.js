

// Arrow Function 

// function NomedaFunção(){}
// () => {}

// function funcao1(){
//     console.log(this)
// }

// const funcao2 = () => {
//     console.log(this)
// }

// funcao2()

//--------------------------------
//Closures 

// function soma(x){
//     return function (y){
//         return x + y
//     }
// }

// console.log(soma(10)(20))
//---------------------------------

// const pessoa ={ 
//     nome: 'renan',
//     idade: 30
// }

// function gritar(prefixo){
//     console.log(prefixo, this.nome)
// }

// gritar.apply(pessoa, ['olaaaaaa'])
// gritar.call(pessoa, 'hello')
//--------------------------------------

function adicao(x, y){
    return x + y
}

function multiplicacao(x, y){
    return x * y
}

function calculadora(x, operacao, y){
    console.log(operacao(x, y))
}

calculadora(10, adicao, 20)
calculadora(10, multiplicacao, 20)