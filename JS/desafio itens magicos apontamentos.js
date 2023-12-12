// Classe é uma estrutura/esqueleto
class ItemMagico {
    nome = "Choris" // Este atributo é Hard Coded --> Não precisa estar dentro do construtor

    // Para atributos que receberão valores dinâmicos --> Precisa definir o atributo dentro do construtor
    constructor(tipoDoItem, dano, resistencia) {
        this.tipoDoItem = tipoDoItem;
        this.dano = dano;
        this.resistencia = resistencia
        this.danoEmCombate = this.calcularDano()
    }

    calcularDano() {
        return this.tipo === 'arma' ? this.dano * 2 : this.dano;
    }
}

// Instância usa o esqueleto da Classe pra criar uma variável
let faca = new ItemMagico('faca', 500, 150)
console.log('faca.danoEmCombate: ', faca.danoEmCombate)



// -------------------------------------------------------------



class Pokemon {
    nome = "Charizard" // Hard coded --> Definimos dentro do código
    tipo = "Fogo"
    pokemonDizendoOi // Não é Hard Coded --> Definimos na hora que 

    constructor() {
        this.pokemonDizendoOi = this.dizOi() // De onde é esse dizOi()?? De qual instância?? --> O "this" diz que é da instância atual
    }

    dizOi() {
        return "Meu nome é " + this.nome
    }
}

console.log(new Pokemon(10).nome) // Desta forma --> Foi criado uma instância, mas ela só existe nessa linha

let meuPokemon = new Pokemon(10) // Desta forma --> A instância foi colocada dentro de uma variável --> Conseguimos usar em outros lugares do código

meuPokemon.nome = "Pikachu"
console.log(meuPokemon.nome)


let meuSegundoPokemon = new Pokemon(5)
// console.log(meuSegundoPokemon.pokemonDizendoOi)

