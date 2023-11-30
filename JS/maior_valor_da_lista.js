const conjuntoDeEntradas = [12, 50, 10, 98, 23];

for (let i = 0; i < conjuntoDeEntradas.length; i++) {
  const valor = conjuntoDeEntradas[i];
  //console.log(valor);
}

let maiorValor = 0;

for (let index = 0; index < conjuntoDeEntradas.length; index++) {
  const numeroSorteado = conjuntoDeEntradas[index];
  //console.log(numeroSorteado);
  if (numeroSorteado > maiorValor){
    maiorValor = numeroSorteado
    //console.log(maiorValor)
  }
}

function print(texto){
  console.log(texto)
}

print(maiorValor)