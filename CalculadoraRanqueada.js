function Ranqueada(vitorias ,derrotas ){
    while(vitorias < derrotas  ){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e está no nível de FERRO!`)
        break
    }
    if(vitorias >= 10 & vitorias <= 20 ){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e está no nível de BRONZE!`)
    }
    if(vitorias >= 21 & vitorias <= 50){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e está no nível de PRATA!`)
    }
    if(vitorias >= 51 & vitorias <= 80){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e está no nível de OURO!`)
    }
    if(vitorias >= 81 & vitorias <= 90){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e está no nível de DIAMANTE!`)
    }
    if(vitorias >= 91 & vitorias <= 100){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e está no nível de LENDÁRIO!`)
    }
    if(vitorias >= 101){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e está no nível de IMORTAL!`)
    }
    return vitorias , derrotas

    
}
  Ranqueada(85 , 10);


 
// MODELO COM RESULTADO DIFERENTE,DEIXANDO O RESULTADO DECLARADO DENTRO DOS PARAMETROS
  function Ranqueadas(vitorias = 105 ,derrotas = 10){
    while(vitorias < derrotas  ){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e está no nível de FERRO!`)
        break
    }
    if(vitorias >= 10 & vitorias <= 20 ){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e está no nível de BRONZE!`)
    }
    if(vitorias >= 21 & vitorias <= 50){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e está no nível de PRATA!`)
    }
    if(vitorias >= 51 & vitorias <= 80){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e está no nível de OURO!`)
    }
    if(vitorias >= 81 & vitorias <= 90){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e está no nível de DIAMANTE!`)
    }
    if(vitorias >= 91 & vitorias <= 100){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e está no nível de LENDÁRIO!`)
    }
    if(vitorias >= 101){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e está no nível de IMORTAL!`)
    }
    return vitorias , derrotas

    
}
  Ranqueadas();

  // MODELO MOSTRANDO VITÓRIAS E DERROTAS DO HERÓI

  function Ranqueadam(vitorias ,derrotas  ){
    while(vitorias < derrotas  ){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e ${derrotas} derrotas e está no nível FERRO!`)
        break
    }
    if(vitorias >= 10 & vitorias <= 20 ){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e ${derrotas} derrotas está no nível BRONZE!`)
    }
    if(vitorias >= 21 & vitorias <= 50){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e ${derrotas} derrotas e está no nível PRATA!`)
    }
    if(vitorias >= 51 & vitorias <= 80){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e ${derrotas} derrotas e está no nível  OURO!`)
    }
    if(vitorias >= 81 & vitorias <= 90){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e ${derrotas} derrotas e está no nível DIAMANTE!`)
    }
    if(vitorias >= 91 & vitorias <= 100){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e ${derrotas} derrotas e está no nível LENDÁRIO!`)
    }
    if(vitorias >= 101){
        console.log(`O Herói tem saldo de vitória de ${vitorias - derrotas} vitórias e ${derrotas} derrotas e está no nível IMORTAL!`)
    }
    return vitorias , derrotas

    
}
  Ranqueadam(100 , 10);

  
 

 

  
 
