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

let n = 4;
let ast = "";

for (let linhas = 1; linhas <= n; linhas++){
    ast = ast + "*";
    }
    console.log(ast)

for ( let imp = 1; imp <= n; imp++){
    console.log(ast);
}

