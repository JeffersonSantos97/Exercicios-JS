/* 03. Um novo modelo de carro, super econômico foi lançado.
Ele faz 20 km com 1 litro de combustível.
Cada litro de combustível custa R$ 5,00.

Faça um programa que pergunte ao usuário quanto de dinheiro ele tem 
e em seguida diga quantos litros de combustível ele pode comprar e quantos 
kilometros o carro consegue andar com este tanto de combustível.
*/ 

const din = prompt ("Quanto de dinheiro você tem ? ");
const litros = comprar(din);
const distancia = andar(litros);
console.log( `Litros: ${litros} `);
console.log(`distancia: ${distancia}km`);

function comprar(d){
    return d / 5; 
}
// Criei uma função pra descobrir quantos de litros eu consigo comprar 


function andar(l){
    return 20 * l;
}
//Depois que eu descubro quantos litros eu tenho, eu sei quantos km eu consigo andar com os litros
