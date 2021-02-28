//Exercício 1
//Para o primeiro exercício de hoje, faça um programa que, dado 
//um valor n qualquer, seja n > 1 , imprima na tela um quadrado 
//feito de asteriscos de lado de tamanho n . Por exemplo: 

//n = 5

//*****
//*****
//*****
//*****
//*****

//let n = 4;
//let ast = "*";
//let lin ="";

//for (let indexLin = 1; indexLin <= n; indexLin++){
//    lin = lin + ast;
//    }

//    console.log(lin)

//for ( let imp = 1; imp <= n; imp++){
//   console.log(lin);
//}


//Exercício 2
//Para o segundo exercício, faça o mesmo que antes, mas que imprima um 
//triângulo retângulo com 5 asteriscos de base. Por exemplo:

//n = 5

//*
//**
//***
//****
//*****


//let base = 5;
//let ast = "*";
//let lin = "";

//for (let indexLin = 0; indexLin <= base; indexLin++){
   // lin = lin + ast;

   // console.log(lin)

   // }
    

    //Exercício 3
    //Agora inverta o lado do triângulo. Por exemplo: 
    //n = 5

    //*
   //**
  //***
 //****
//*****

//Atenção! Note que esse exercício é bem mais complexo que o 
//anterior! Não basta, aqui, imprimir somente asteriscos. Você 
//precisará de uma lógica para imprimir espaços também.


//let base = 5;
//let ast = "*";
//let lin = " ";
//let valorMaxAst = base;

//for (let indexLin = 0; indexLin <= base; indexLin++){
  //for (let indexColunas = 0; indexColunas <= base; indexColunas++){
   // if (indexColunas < valorMaxAst){
  //    lin = lin + " ";
  //  } else {
   //   lin = lin + ast;
 //   }
 // }
 // console.log(lin);
 // lin = " ";
 // valorMaxAst = valorMaxAst - 1;
 // }
    

//Exercício 4
//Depois, faça uma pirâmide com n asteriscos de base:

//n = 5

//  *
// ***
//*****

//Modelo do Gabarito
//let base = 5;
//let ast = "*";
//let lin = " ";
//let meio = (base + 1)/2;
//let meioEsq = meio;
//let meioDir = meio;


//for (let indexLin = 0; indexLin < meio; indexLin++){
  //for (let indexColunas = 1; indexColunas <= base; indexColunas++){
    //if (indexColunas <= meioEsq && meioDir <= indexColunas){
      //lin = lin + ast;
      
    //} else {
     //lin = lin + " ";
    //}
  //}
  //console.log(lin);
   //lin = " ";
  //meioEsq += 1;
 //meioDir -= 1;
   //}


   //Minha resolução
let base = 5;
let ast = "*";
let lin = " ";
let meio = (base + 1)/2; //Base sempre com ns ímpares
let meioEsq = meio;
let meioDir = meio;
let qtideLinhas = (base + 1)/2; //Base sempre com ns ímpares
let qtideColunas = base;


for (let indexLin = 1; indexLin <= qtideLinhas; indexLin++){     //Percorrendo as linhas
  for (let indexColunas = 1; indexColunas <= qtideColunas; indexColunas++){ //Percorrendo as colunas
    if ((indexColunas - meio) == 0 ){ //Determinando se o local é no meio e Caso seja efetuando a math de localização no plano cartesiano (tabela) e inserção do asterisco
      lin = lin + ast;
      
    } else if ((indexColunas < meioEsq) && (indexLin > (meio - indexColunas))) { //Determinando se o local é do Lado Esq e Caso seja efetuando a math de localização no plano cartesiano (tabela) e inserção do asterisco
      lin = lin + ast;

    } else if ((indexColunas > meioDir) && (indexLin > (indexColunas - meio))) { //Determinando se o local é do Lado Dir e Caso seja efetuando a math de localização no plano cartesiano (tabela) e inserção do asterisco
      lin = lin + ast;

    } else {
      lin = lin + " "; 
    }
  }
  console.log(lin);
   lin = " "; // Limpando a memória da variável lin para o próximo loop
   }




