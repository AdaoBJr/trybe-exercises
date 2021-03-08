let player = {
    name : "Marta",
    lastName : "Silva",
    age : 34,
    medals : {
        golden : 2,
        silver : 3
    }
};
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
player.fullName = player.name + " " + player.lastName;

//Verificando o Objeto em formato Table
//console.table(player);

//-----------//
//Solicitação 01
//console.log("A jogadora " + player.fullName + " " + "tem " + player.age + " anos de idade.")


//Solicitação 02
//console.log("A jogadora " + player.fullName + " " + "foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " anos.");


//For in com Arrays e Objetos
//let cars = ["Volvo", "Tesla", "GM"];
//for (let index in cars) {
//    console.log(cars[index]);
//}

let car = {
    marca : "Tesla",
    modelo : "Model S",
    cor : "Vermelho"
};
//for (let index in car){
 //   console.log(index);
//}

for (let index in car){
    console.log(index, car[index]);
}