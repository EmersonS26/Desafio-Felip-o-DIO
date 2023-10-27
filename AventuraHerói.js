class infoHerói{
    constructor(nome,idade,tipo,HP,ataque,defesa){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.HP = HP
        this.ataque = ataque
        this.defesa = defesa
        

     if(tipo === "Mago"){
        
        console.log(`O Herói ${this.nome}(MAGO) usou seu poder especial!`)
     }
     if(tipo === "Guerreiro"){
        console.log(`O Herói ${this.nome}(GUERREIRO) usou seu poder especial!`)
     }
     if(tipo === "Monge"){
        console.log(`O Herói ${this.nome}(MONGE) usou seu poder especial!`)
     }
     if(tipo === "Ninja"){
        
        console.log(`O Herói ${this.nome}(NINJA) usou seu poder especial!`)
     }
     
    }
    
     Ataquemago(){
        console.log(`Herói ${this.tipo} atacou usando Hiper Bola de Fogo!`)
     }
     Ataqueguerreiro(){
        console.log(`Herói ${this.tipo} atacou usando Saque Rápido!`)
     }
     Ataquemonge(){
        console.log(`Herói ${this.tipo} atacou usando Mega Atomic!`)
     }
     Ataqueninja(){
        console.log(`Herói ${this.tipo} atacou usando Escuridão Profunda!`)
     }
     
     
     
}
const heroiA = new infoHerói("Secthor01",26,"Mago",5000,7675,5238)
heroiA.Ataquemago()
console.log(heroiA)


