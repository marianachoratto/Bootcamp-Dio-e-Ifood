// Para importar arquivos usar a função require 

const funcoes =  require('../JS/oi')

console.log(funcoes.print)

funcoes.print(funcoes.gets())

let maiorValor = 0;

for (let index = 0; index < conjuntoDeEntradas.length; index++) {
  const numeroSorteado = conjuntoDeEntradas[index];
  //console.log(numeroSorteado);
  if (numeroSorteado > maiorValor){
    maiorValor = numeroSorteado
    console.log(numeroSorteado)
    //return numeroSorteado
  }
}