class carros {
  marca;
  cor;
  gastoMedioCombustivelPorKm;
  // NOTE! Se o objeto não foi igual ao atributo primeiro o código vai passar o atributo: undefined, depois ele vai colocar o atributo que você criou. Se igualar os 2 se misturam

  gastoDePercurso(distancia, precoCombustivel) {
    return this.gastoMedioCombustivelPorKm * distancia * precoCombustivel;
  }

  constructor(marca, cor, gastoMedioCombustivelPorKm) {
    this.marca = marca; //NOTE! O 1 marca é um objeto, já o 2 marca é um parâmetro local que está sendo passado. O que vai aparecer no console é o objeto
    this.cor = cor;
    this.gastoMedioCombustivelPorKm = gastoMedioCombustivelPorKm;
  }
}

const uno = new carros("Fiat", "prata", 1 / 12);

console.log(uno)
console.log((uno.gastoDePercurso(70, 5)).toFixed(2))

const palio = new carros("fiat", "preto", 1 / 10);
console.log(palio);
console.log(palio.gastoDePercurso(70, 5).toFixed(2));
