class carros {
    marca;
    cor; 
    gastoMedioCombustivelPorKm;
    gastoViagem;
    // NOTE! Se o objeto não foi igual ao atributo primeiro o código vai passar o atributo: undefined, depois ele vai colocar o atributo que você criou. Se igualar os 2 se misturam 

    constructor (marca, cor, gastoMedioCombustivelPorKm){ // se esses atributos são obrigatórios esses parâmetros tem que passar pelo construtor, não entendi muito bem o motivo
        
        this.marca = marca //NOTE! O 1 marca é um objeto, já o 2 marca é uma variável local que está sendo passada. O que vai aparecer no console é o objeto
        this.cor = cor 
        this.gastoMedioCombustivelPorKm = gastoMedioCombustivelPorKm

        const precoCombustivel = 5.25
        this.gastoMedioCombustivelPorKm
        let distanciakm = 36.7;
        let litrosConsumidos = distanciakm / gastoMedioCombustivelPorKm;

        this.gastoViagem = (litrosConsumidos * precoCombustivel).toFixed(2)
    }
}

const carro1 = new carros('Uno', 'branco', 12)

console.log(carro1)


