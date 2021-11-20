/* 01. Escreva um programa que pede o raio de um círculo, 
e em seguida exiba o perímetro e área do círculo.
*/
const r = prompt("Digite o raio de um circulo: ");

//Usei o prompt pra abrir a uma janela no navegador

const a = area(r).toFixed(1);

//Crei uma constante ( a ) para receber a função
//To fixed() é pra definir quantas casas decimais após a virgula 

console.log(a);

const p = perimetro(r).toFixed(1);
// Mesma coisa que eu fiz com o ( a )
console.log(p);


function area(r){
    return Math.PI * (r*r);
    //Math.PI é um objeto que retorna ( PI )
}
//A função retorna a formula da area do circulo
function perimetro(r){
    return 2 * Math.PI * r;
    }

// A função retorna a formula do perímetro do circulo
