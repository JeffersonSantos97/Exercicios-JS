/*02. Você está no Brasil, e para temperatura usamos o grau Celsius.
Porém, quando você for contrato para trabalhar como programador JavaScript no exterior, 
deverá usar graus Fahrenheit. 
Ou seja, você fornece a temperatura em graus Celsius, e seu script JS faz 
 a conversão para graus Fahrenheit*/ 

let celsius = document.getElementById("celsius");

let r = document.querySelector("#resposta");
let buttonC = document.querySelector("#buttonClick") 

 function Fahrenheit(){
    let c = parseInt(celsius.value); 
    r.innerHTML = ((9/5) * c + 32) + " Fahrenheit";
 }
 buttonC.addEventListener("click",Fahrenheit);

 

 //Esse exercício não tem muito mistério. 
 //Joguei a formula que transforma Celsius em Fahrenheit na função 