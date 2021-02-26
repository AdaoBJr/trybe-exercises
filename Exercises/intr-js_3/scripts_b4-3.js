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


let base = 5;
let ast = "*";
let lin = " ";
let valorMaxAst = base;

for (let indexLin = 0; indexLin <= base; indexLin++){
  for (let indexColunas = 0; indexColunas <= base; indexColunas++){
    if (indexColunas < valorMaxAst){
      lin = lin + " ";
    } else {
      lin = lin + ast;
    }
  }
  console.log(lin);
  lin = " ";
  valorMaxAst = valorMaxAst - 1;
    

}
    