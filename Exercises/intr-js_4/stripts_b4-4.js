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

//Exercício 1
//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

//let palavra = "arara";
//let arrayLetras = palavra.split("");
//let isPa = false;

//for ( let index = 0; index < arrayLetras.length; index++){
//console.log(index, arrayLetras[index]);
//}

//for ( let index in arrayLetras){
 // console.log(index, arrayLetras[index]);
//}

//for (let index = 0; index < arrayLetras.length; index++){
 // if (arrayLetras[index] == arrayLetras[(arrayLetras.length-1) - index]){
 // isPa = true;
//} else {
//  }
//} 
//console.log(isPa);


//function verificaPa(palavra) {
  //let arrayLetras = palavra.split("");
  //let isPa = false;

  //for ( let index in arrayLetras){
  //  if (arrayLetras[index] == arrayLetras[(arrayLetras.length-1)-index]){
  //    isPa = true;
  //  }
 // }
 // return isPa;
//}

//console.log(verificaPa('arara'));
      
 

//Exercício 2
//Crie uma função que receba um array de inteiros e retorne o índice do maior valor. 
 
//function verificaMaiorI (arrayI) {
  //let maiorN = 0;
 // let maiorI = 0;
 // let arrayInserido = arrayI;

 // for (let index in arrayInserido){
  //  if (arrayInserido[index] > maiorN){
  //    maiorN = arrayInserido[index];
  //  }    
  //}
  //maiorI = arrayInserido.indexOf(maiorN);

  //return maiorI;

//}
//console.log (verificaMaiorI([ 2, 3, 6, 7, 10, 1]));


//Exercício 3
//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function verificaMenorI (arrayI) {
  let menorN = 0;
  let menorI = 0;
  let arrayInserido = arrayI;

  for (let index in arrayInserido){
    if (arrayInserido[index] < menorN){
      menorN = arrayInserido[index];
    }    
  }
  menorI = arrayInserido.indexOf(menorN);

  return menorI;

}
console.log (verificaMenorI([ 2, 4, 6, 7, 10, 0, -3]));
