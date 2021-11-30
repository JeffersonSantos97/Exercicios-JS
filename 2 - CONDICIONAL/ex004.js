/*4. Faça um script que verifique se uma letra 
digitada num campo de input é vogal ou consoante.*/

let info = document.querySelector("#letra");
let buttonVerificar = document.querySelector("#buttonVerificar");
let resposta = (document.querySelector("span"));

//Esse .toLowerCase() serve pra deixar todas as letras que forem digitadas em minusculo

//Precisa de letra minuscula pq no JAVASCRIPT (a) é diferente de (A)
//Então só deixa tudo minusculo, pq faz um tipo só de comparação

function VogConso(){
    let i = (info.value).toLowerCase();
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
        resposta.innerHTML = "VOGAL"
    }
//Se qualquer dessa letras estiver, vai retornar vogal, mas se não estiver, vai aparecer consoante
    else {
        resposta.innerHTML = "CONSOANTE"
    };
}
buttonVerificar.addEventListener("click",VogConso);

//Chamando a função