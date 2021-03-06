function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
 };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

 //Exercício 1
//  O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. 
//  Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como 
//  filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no 
//  array pois representam respectivamente Segunda-feira e Terça-feira.

//  1.Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . 
//  Ex: <li class="day">3</li>
//  2.Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe 
//  holiday . Ex: <li class="day holiday">24</li>
//  3.Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe 
//  friday . Ex: <li class="day friday">4</li>

  // DIAS DO MÊS
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]; 
  

function createDaysOfTheMonth () {  
  let localDaysList = document.querySelector("#days");

  for (let index = 0; index < dezDaysList.length; index += 1){
      let day = dezDaysList[index];
      let dayItem = document.createElement("li");
      
      if (day == 24 || day == 31){
          dayItem.className = "day holiday";
          dayItem.innerHTML = day;
          localDaysList.appendChild(dayItem);
      } else if (day == 4 || day == 11 || day == 18){
        dayItem.className = "day friday";
        dayItem.innerHTML = day;
        localDaysList.appendChild(dayItem);  
      } else if (day == 25) {
        dayItem.className = "day holiday friday";
        dayItem.innerHTML = day;
        localDaysList.appendChild(dayItem);
      } else {
        dayItem.className = "day";
        dayItem.innerHTML = day;
        localDaysList.appendChild(dayItem);
      }
  };
};

createDaysOfTheMonth();
  
//Exercício 2
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente 
// um botão com o nome "Feriados".
// 1.Adicione a este botão a ID "btn-holiday" .
// 2.Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function newButton(buttonName){
    let localDivBtn = document.querySelector(".buttons-container");
    let btnHolidays = document.createElement("button");
    
    btnHolidays.id = "btn-holiday";
    btnHolidays.innerText = buttonName;
    localDivBtn.appendChild(btnHolidays);
}
newButton("Feriados");

//Exercício 3
//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda 
//a cor de fundo dos dias que possuem a classe "holiday" .
//1.É interessante que este botão possua também a lógica inversa. Ao ser clicado 
//novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

let localReceiveClick = document.querySelector("#btn-holiday");
let localReceiveBg = document.querySelectorAll(".holiday");
let bgColorInitial = "rgb(238,238,238)";
let newBgColor = "white";

localReceiveClick.addEventListener("click",receiveClick);
    
function receiveClick (){
    for (let i = 0; i < localReceiveBg.length; i += 1){
        if (localReceiveBg[i].style.backgroundColor == newBgColor){
            localReceiveBg[i].style.backgroundColor = bgColorInitial
        } else {
            localReceiveBg[i].style.backgroundColor = newBgColor
        }
    }
}
