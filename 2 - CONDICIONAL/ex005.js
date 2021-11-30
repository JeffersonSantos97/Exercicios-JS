/* 5. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular 
    a média do aluno e dar o seguinte resultado:

    A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    A mensagem "Reprovado", se a média for menor do que sete;
    A mensagem "Aprovado com Distinção", se a média for igual a dez.
   
    */

    
    let buttoncalc = document.getElementById("calc");
    let m = document.getElementById("media");
    let result = document.getElementById("result");

    function media(){
        let nota1 = parseFloat(document.getElementById("n1").value);
    let nota2 = parseFloat(document.getElementById("n2").value);
        m.innerHTML = (nota1 + nota2) / 2;
        var med =  (nota1 + nota2) / 2;
        
        if(med === 10){
            result.innerHTML = "aprovado com distinção"
        }
        else if(med >=7){
            result.innerHTML = "aprovado"
        }
        else{
            result.innerHTML = "REPROVADO"
        }
    }
    buttoncalc.addEventListener("click",media);