/*02. Você está no Brasil, e para temperatura usamos o grau Celsius.
Porém, quando você for contrato para trabalhar como programador JavaScript no exterior, 
deverá usar graus Fahrenheit. 
Ou seja, você fornece a temperatura em graus Celsius, e seu script JS faz 
 a conversão para graus Fahrenheit*/ 

const celsius = prompt("Digite quantos graus Celsius está fazendo");

 function Fahrenheit(c){
     return (9/5) * c + 32
 }
 const f = Fahrenheit(celsius);
 console.log(f);

 //Esse exercício não tem muito mistério. 
 //Joguei a formula que transforma Celsius em Fahrenheit na função 