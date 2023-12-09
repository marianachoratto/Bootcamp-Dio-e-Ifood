class pessoa {
  nome;
  peso;
  altura;
  //Existem 2 formas de fazer o imc
  imc(peso, altura) {
    return (peso / Math.pow(altura, 2)).toFixed(2);
  }

  classificarImc(imc) {
    if (imc < 18.5) {
      return "abaixo do peso";
    } else if (imc >= 18.5 && imc < 30) {
      return "peso nomal";
    } else if (imc >= 30) {
      return "obesidade";
    }
  }

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
}

let jose = new pessoa( );
jose.nome = "jose";
jose.peso = 70;
jose.altura = 1.75;
console.log(jose);

console.log(jose.imc(70, 1.75));
console.log(jose.classificarImc(70, 1.75));

let nathalia = new pessoa("nathalia", 60, 1.73);
// o constructor é que permite esse tipo de adição de informações
console.log(nathalia);

console.log(nathalia.imc(60, 1.73));

new pessoa ('camila', 70, 1.73)

console.log(camila)
