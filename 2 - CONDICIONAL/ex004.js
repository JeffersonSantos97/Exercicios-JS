/*4. Faça um script que verifique se uma letra 
digitada num campo de input é vogal ou consoante.*/

const info = (prompt("Digite uma letra:")).toLowerCase();
//Esse .toLowerCase() serve pra deixar todas as letras que forem digitadas em minusculo

//Precisa de letra minuscula pq no JAVASCRIPT (a) é diferente de (A)
//Então só deixa tudo minusculo, pq faz um tipo só de comparação
function VogConso(v){
    
    if (v === "a" || v === "e" || v === "i" || v === "o" || v === "u"){
        alert(`A letra ${v} é uma vogal`)
    }
//Se qualquer dessa letras estiver, vai retornar vogal, mas se não estiver, vai aparecer consoante
    else {
        alert(`A letra ${v} é uma consoante`)
    };
    

}
VogConso(info);
//Chamando a função