//FOR IN
//Exercício 1
//Imprima no console uma mensagem de boas-vindas para a personagem acima, 
//incluindo seu nome.


//let info = {
    //personagem: "Margarida",
   // origem: "Pato Donald",
  //  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  //};

//  console.log("Bem-vinda, " + info.personagem);


  //Exercício 2
//Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o 
//valor "Sim" e, em seguida, imprima o objeto no console. 


//let info = {
   // personagem: "Margarida",
   // origem: "Pato Donald",
   // nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  //};

  //info.recorrente = "Sim";

  //console.table(info);


   //Exercício 3
//Faça um for/in que mostre todas as chaves do objeto. 


    //let info = {
      //  personagem: "Margarida",
      //  origem: "Pato Donald",
       // nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  //  };

    //info.recorrente = "Sim";

    //for (let key in info){
    //    console.log(key);
    //}


   //Exercício 4
//Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. 


//let info = {
  //  personagem: "Margarida",
  //  origem: "Pato Donald",
  //  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
 // };

 // info.recorrente = "Sim";

  //for (let key in info){
 //     console.log(info[key]);
 // }

  //Exercício 5
//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) 
//do primeiro e os seguintes 
//valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".


//let info = {
  //  personagem: "Margarida",
  //  origem: "Pato Donald",
  //  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  //  recorrente = "Sim"
  //};

 

  //let info2 = {
  //  personagem: "Tio Patinhas",
  //  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  //  nota: "O último MacPatinhas",
  //  recorrente = "Sim"
 // };

  //for (let key in info){
    //  for (let key2 in info2){

     // }
     // console.log(info[key] + " e " + info[key2]);
  //}
 
//-------------------------------------------------------------------------------------
//FUNCTION

let palavra = "arara";
let arrayLetras = palavra.split("");
let isPa = false;

//for ( let index = 0; index < arrayLetras.length; index++){
//  console.log(index, arrayLetras[index]);
//}

//for ( let index in arrayLetras){
 // console.log(index, arrayLetras[index]);
//}

for (let index = 0; index < arrayLetras.length; index++){
  if (arrayLetras[index] == arrayLetras[(arrayLetras.length-1) - index]){
  isPa = true;
} else {
  }
}
   
console.log(isPa);

      
       
 


  
