/* 7. Faça um script que pergunte em que turno você estuda. 
Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.*/

let buttonResp = document.getElementById("buttonResp");
function resposta() {
    let name = document.getElementById("name").value;
    let turno = document.getElementById("turno").value;
    let resp = document.getElementById("resp");
    if (turno === "M" || turno === "m") {
        resp.innerHTML = "Bom dia, " + name;
    }
    else if (turno === "V" || turno === "v") {
       resp.innerHTML = "Boa Tarde, " + name;
    }
    else if (turno === "N" || turno === "n") {
        resp.innerHTML = "Boa Noite, " + name;
    }
    else {
        resp.innerHTML = "Valor inválido, " + name;
    }
}
buttonResp.addEventListener("click",resposta);