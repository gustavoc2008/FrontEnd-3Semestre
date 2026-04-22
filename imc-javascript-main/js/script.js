function calcular() {
    //Pegar os valores dos campos
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    //deixou de preencher um campo
    if (nome.trim().length == 0 || isNaN(altura) || isNaN(peso)) {
        alert("Preencha todos os campos: Nome, Altura e Peso");
        return false;
    }

    const imc = calcularIMC(altura, peso);
    const textoSituacao = gerarTextoIMC(imc);

    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(imc);
    console.log(textoSituacao);
    
}
    //calcular o IMC
    function calcularIMC(altura, peso) {
        return peso / (altura * altura);
    }

    function gerarTextoIMC(imc) {
        if (imc < 16) {
            return "Magreza Grave";
        }
        else if (imc < 18.5) {
            return "Magreza Leve";
        }
        else if (imc >= 18.5 && imc < 25) {
            return "Saudavel";
        }
        else if (imc < 30) {
            return "Sobrepeso";
        }
        else if (imc < 35) {
            return "Obesidade 1";
        }
        else if (imc < 40){
            return "Obesidade 2";
        }
        else {
            return "Obesidade 3";
        }
    }

    let situacao = "";

    let tabela = document.getElementById("cadastro");

