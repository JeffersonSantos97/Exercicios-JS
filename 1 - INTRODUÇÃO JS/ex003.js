/* 03. Um novo modelo de carro, super econômico foi lançado.
Ele faz 20 km com 1 litro de combustível.
Cada litro de combustível custa R$ 5,00.

Faça um programa que pergunte ao usuário quanto de dinheiro ele tem 
e em seguida diga quantos litros de combustível ele pode comprar e quantos 
kilometros o carro consegue andar com este tanto de combustível.
*/ 

let dinheiro = document.getElementById("din");
let l = document.getElementById("litros");
let dis = document.getElementById("distancia");
let buttonClick = document.getElementById("buttonClick");
function litros(){
    var d = parseFloat(dinheiro.value);
    l.innerHTML = (d / 5) + " litros";
}

function distancia(){
    var d = parseFloat(dinheiro.value);
    dis.innerHTML = 20 * ( d / 5) + " KM";
}
function lAndD(){
    litros();
    distancia();
}
buttonClick.addEventListener("click",lAndD);
