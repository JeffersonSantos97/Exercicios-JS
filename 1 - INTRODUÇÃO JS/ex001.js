/* 01. Escreva um programa que pede o raio de um círculo, 
e em seguida exiba o perímetro e área do círculo.
*/
let raio = document.querySelector("#raio");
 //Raio com o valor inteiro 
let rPerimetro = document.querySelector("#perimetro");
let rArea = document.querySelector("#area");
let buttonClick = document.querySelector("#buttonClick");

//Usei o prompt pra abrir a uma janela no navegador



//Crei uma constante ( a ) para receber a função
//To fixed() é pra definir quantas casas decimais após a virgula 

function area(){
    let r = parseInt(raio.value);
    rArea.innerHTML =  (Math.PI * (r*r)).toFixed(2);
}
//A função retorna a formula da area do circulo
function perimetro(){ 
    let r = parseInt(raio.value);
    rPerimetro.innerHTML = (2 * Math.PI * r).toFixed(2);
}

// A função retorna a formula do perímetro do circulo
function pAndA(){
    area();
    perimetro();
}

buttonClick.addEventListener("click",pAndA);