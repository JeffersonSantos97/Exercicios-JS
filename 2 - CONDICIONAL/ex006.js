/* 6. Faça um script que leia três números inteiros e mostre o maior deles.*/


//Função com as costantes com os valores

function Maior() {
    let n1 = document.querySelector("#n1");
    let n2 = document.querySelector("#n2");
    let n3 = document.querySelector("#n3");
    var  a = parseInt(n1.value);
    var  b = parseInt(n2.value);
    var  c = parseInt(n3.value);
    let r = document.querySelector("span");
    
    if (a > b && a > c) {
        return r.innerHTML = a;
    }
    else if (b > a && b > c) {
        return r.innerHTML = b;
    }
    else if (c > a && c > b) {
        return r.innerHTML = c;
    }
}