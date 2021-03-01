let player = {
    name : "Marta",
    lastName : "Silva",
    fullName : "Marta Silva",
    age : 34,
    medals : {
        golden : 2,
        silver : 3
    }
};
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

//Verificando o Objeto em formato Table
//console.table(player);

//-----------//
//Solicitação 01
//console.log("A jogadora " + player.fullName + " " + "tem " + player.age + " anos de idade.")


//Solicitação 02
console.log("A jogadora " + player.fullName + " " + "foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " anos.");