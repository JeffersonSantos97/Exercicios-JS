/* 5. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular 
    a média do aluno e dar o seguinte resultado:

    A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    A mensagem "Reprovado", se a média for menor do que sete;
    A mensagem "Aprovado com Distinção", se a média for igual a dez.
    */ 

const n1 = parseFloat(prompt("digite a nota 1: "));
//Peddindo a primeira nota 

//Obs: Se não usar o parseFloat ou o parseInt, a nota que o usuário colocar 
//vai vir como uma string e isso vai fazer dar um erro no seu cálculo 
const n2 = parseFloat(prompt("digite a nota 2: "));
//Pedidndo a segunda nota 

const m = media(n1,n2);
//crei uma constante pra jogar a função media 

resultado();
//Função resultado autoexecutável 
function media(n1,n2){
  
    return ((n1 + n2) / 2).toFixed(1);
    //Como eu quero que sempre apareça a meédia com pelo menos um numero após a virgula, eu coloquei o (toFixed) 
    
}

function resultado(){
    if(m >= 10 ){
        return alert(`Sua média foi ${m} e vocÊ foi APROVADO COM DISTINÇÃO`)
    }
    else if ( m >= 7){
        return alert(`Sua média foi ${m} e você está APROVADO`)
    }
    else {
        alert(`Sua média foi ${m} e você está REPROVADO`)
    }
}