const precoEtanol = 3.64;
const precoGasolina = 5.63;

const kmPorLitro = 12;
let distanciakm = 36.7;
let litrosConsumidos = distanciakm / kmPorLitro;

let combustivel = "etanol";

if (combustivel === "gasolina") {
  let gastoViagem = litrosConsumidos * precoGasolina;
  console.log(gastoViagem.toFixed(2));
} else if (combustivel === "etanol") {
  let gastoViagem = litrosConsumidos * precoEtanol;
  console.log(gastoViagem.toFixed(2));
}

//let gastoViagem = litrosConsumidos * precoCombustivel

//let gastoViagem = litrosConsumidos * combustivel
//console.log(gastoViagem.toFixed(2))

// toFixed() converts a number to a string, rounded to a specified number of decimals:

//------------------------------------------------

let numero = 12;
let numeroPar = numero % 2 === 0;
console.log(numeroPar);
if (numeroPar) {
  console.log(`o número ${numero} é par`);
} else {
  console.log("ímpar");
}

// -----------------------------------

let nota1 = 8;
let nota2 = 7.6;
let nota3 = 5.8;

let media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2));

if (media >= 7) {
  console.log("aprovado");
} else if (media >= 5 && media < 7) {
  console.log("Em recuperação");
} else if (media < 5) {
  console.log("Reprovado");
}
//---------------------------------

let peso = 79
let altura = 1.73

let IMC = peso / Math.pow(altura, 2) 

console.log(IMC.toFixed(2))

//-----------------------------------------
let precoProduto = 100
let condicaoPagamento = 4

if (condicaoPagamento === 1) {
    const aVistaDebito = 0.9
    let precoFinal = precoProduto * aVistaDebito
    console.log('Forma de pagamento escolhida: a vista no débito')
    console.log(`Preço: ${precoFinal}`)
} else if (condicaoPagamento === 2){
    const aVistaPIX = 0.85
    let precoFinal = precoProduto * aVistaPIX
    console.log(precoFinal)
} else if (condicaoPagamento === 3){
    const duasVezes = 1
    let precoFinal = precoProduto * duasVezes
    console.log(precoFinal)
} else if (condicaoPagamento === 4){
    const acimaDuasVezes = 1.1
    let precoFinal = precoProduto * acimaDuasVezes
    console.log(precoFinal.toFixed(2))
}

//let precoFinal = precoProduto * acimaDuasVezes
//console.log(precoFinal)
//----------------------