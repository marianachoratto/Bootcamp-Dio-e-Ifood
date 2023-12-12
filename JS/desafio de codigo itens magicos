class ItemMagico {

    //TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
      constructor(  tipoDoItem, dano, resistencia ) {
        this.tipoDoItem = tipoDoItem;
        this.dano = dano;
        this.resistencia = resistencia
        this.danoEmCombate = this.calcularDano()
      }
    
        calcularDano() {
        return this.tipo === 'arma' ? this.dano * 2 : this.dano;
      }
    }
    
    // Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
    const tipoItem = gets();
    const danoItem = parseInt(gets());
    const resistenciaItem = parseInt(gets());
    
    //TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
      let itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem)
    
    // TODO: Imprima os atributos do item personalizado
    print("Tipo: " + itemPersonalizado.tipoDoItem);
    print("Dano: " + itemPersonalizado.dano );
    print("Resistencia: " + itemPersonalizado.resistencia);
    
    // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
    const danoTotal = itemPersonalizado.calcularDano();
    print("Dano em combate: " + danoTotal);