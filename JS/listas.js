let notas = []

notas.push(5)
notas.push(7)
notas.push(8)
notas.push(2)
notas.push(5)
notas.push(8)

let soma = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i]; // pega o valor do elemento
    soma = soma + nota 
}

console.log(soma)

let media = soma/notas.length
console.log(media)