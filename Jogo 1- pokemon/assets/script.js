for (let index = 1; index <= 24; index++) {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${index}/`

    console.log(url)

    fetch(url).then(
        function(parâmetro1){
            return parâmetro1.json()
        }
    ).then(
        function(parâmetro2){
            const listaDePokemons = window.document.querySelector('.pokemons')
            
            // Se o pokemon só tiver 1 tipo, colocar if pra continuar
            let pokemonsTypes = ''
            
            if (parâmetro2.types.length < 2){
                pokemonsTypes = `<li class="type">${parâmetro2.types[0].type.name}</li>`
            } else {
                pokemonsTypes = `<li class="type">${parâmetro2.types[0].type.name}</li>
                <li class="type">${parâmetro2.types[1].type.name}</li>`
            }


            listaDePokemons.innerHTML += `<li>
            <span class="number">${index}</span>
            <span class="name">${parâmetro2.forms[0].name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemonsTypes}
                </ol>
                <a href="https://bulbapedia.bulbagarden.net/wiki/${parâmetro2.forms[0].name}_(Pok%C3%A9mon)" target='_blank'>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg" alt=""></a>
            </div>
            </li>`
            
        }
    )



}




