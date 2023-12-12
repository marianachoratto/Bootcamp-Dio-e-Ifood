const tipoMagia = 'cura';
//console.log(tipoMagia)
//const quantidade = parseInt();
//const mensagem = obterMensagem(tipoMagia);

const mensagens = {
    ataque: "Usou magia de ataque!",
    cura: "Usou magia de cura!",
    defesa: "Usou magia de defesa!",
    invalido: "Tipo de magia inválido!"
};


if (tipoMagia == 'cura'){
    console.log(mensagens.cura)
}


function oi(){
    
    if (tipoMagia == 'ataque'){
        console.log("Usou magia de ataque!")
      } else if (tipoMagia == 'cura'){
        console.log(mensagens.cura)
      } else if (tipoMagia == 'defesa'){
        console.log("Usou magia de defesa!")
      } else {
        console.log("Tipo de magia inválido!")
      }

    //   const mensagens = {
    //     ataque: "Usou magia de ataque!",
    //     cura: "Usou magia de cura!",
    //     defesa: "Usou magia de defesa!",
    //     invalido: "Tipo de magia inválido!"
    //   };

      return mensagens[tipoMagia] || mensagens.invalido;

    
}

    let naoSei = oi()
    console.log(naoSei)



