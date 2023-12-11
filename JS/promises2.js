const fs = require('fs')

//const promessaDeLeituraDoArquivo =  fs.promises.readFile('tarefas.csv')

// promessaDeLeituraDoArquivo.then((arquivo) => {
//     console.log(arquivo.toString('utf-8'))
// }).catch((error)=>{
//     console.log('algo deu errado', error)
// })

// É uma forma mais bonita de escrever do que com a função de cima 

async function buscarArquivo(){
    const arquivo = await  fs.promises.readFile('tarefas.csv') //como se tivesse um .then() aqui 
    const textoDoArquivo = arquivo.toString('utf-8')
    console.log(textoDoArquivo)
}

buscarArquivo()
