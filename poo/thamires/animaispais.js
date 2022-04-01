class animais {
    constructor(nome, classe, ordem, sexo, comida){
        this.nome = nome,
        this.classe = classe,
        this.ordem = ordem,
        this.sexo = sexo,
        this.comida = comida
    }

    nome () { 
        console.log(this.nome);
    }
        
    classe () {
       console.log(this.classe);
    }
    
    ordem () {
       console.log(this.ordem);
    }
    
    sexo () {
       console.log(this.sexo);
    }
    
    comida () {
       console.log(this.comida);
    }
}

module.exports=animais



 
