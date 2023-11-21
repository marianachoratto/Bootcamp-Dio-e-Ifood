// function sayMyName(name){
//     return(`My name is ${name}`)
// }

// sayMyName('Mariana Choratto')
// sayMyName('alexandre')

// function quadrado(valor){
//    return valor * valor 
// }

// //console.log(quadrado(10))
// let variavel = quadrado(10)
// console.log(variavel)

// function incrementarJuros(valor, percentualJuros){
//     const valorDeAcréscimo = (percentualJuros/100)*valor
//     return valor + valorDeAcréscimo
// }

// console.log(incrementarJuros(300,15))

//---------------------------------------

// function calcularIMC(peso, altura){
//     return peso/Math.pow(altura, 2)
// }

// function classificarIMC(imc) {
//     if (imc < 18.5){
//         return 'abaixo do peso'
//     } else if (imc >= 18.5 && imc< 30){
//         return 'peso nomal'
//     } else if (imc >= 30){
//         return 'obesidade'
//     }
// }

// function main(){
// const peso = 70
// const altura = 1.73
// const imc =  calcularIMC(peso, altura)
// console.log(classificarIMC(imc))
// }

//-----------------------------------------

// function maiorDeIdade(idade){
//     if (idade >= 18){
//         console.log(sayMyName('Mariana Choratto') + ' maior de idade')
//     } else {
//         console.log(sayMyName('Mariana Choratto') +' menor de idade')
//     }
// }

// maiorDeIdade(32);

//----------------------------------------------------
let precoProduto = 100
let condicaoPagamento = 1
let desconto = 20
let juros = 15

function pagamento2(precoProduto, desconto){
    return(precoProduto-(precoProduto*(desconto/100)))
}

function comJuros(precoProduto, juros){
    return (precoProduto + (precoProduto*juros/100))
}

// pagamento2(precoProduto, desconto)
// comJuros(precoProduto, juros)


if (condicaoPagamento === 1) {
    console.log(
        pagamento2(precoProduto, 10)
    )
} else if (condicaoPagamento === 2){
    console.log(
        pagamento2(precoProduto, 15)
    )
} else if (condicaoPagamento === 3){
    console.log(
        pagamento2(precoProduto, 0)
    )
} else if (condicaoPagamento === 4){
    console.log(
        comJuros(precoProduto, 10)
    )
}