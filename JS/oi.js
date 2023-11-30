

function gets(){
    const conjuntoDeEntradas = [12, 50, 10, 98, 23]

    for (let i = 0; i < conjuntoDeEntradas.length; i++) {
         const valor = conjuntoDeEntradas[i]
           console.log(valor) 
           //return valor
    }
}

function print(texto){
    console.log(texto)
}

module.exports = {gets, print }