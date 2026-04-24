function calcular() {
    event.preventDefault();
    //entrada
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let op = document.getElementById("operacao").value;//soma
    let resultado = null;

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById('resultado').innerText = 'Preencha todos os números!'
    }


    //processamento
    if (op == 'soma') {
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if (op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'multiplicacao') {
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'divisao') {

        if (n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }

    } else {
        resultado = "Operação Inválida";
    }

    //saída
    // console.log(`Resultado da operação: ${resultado}`);
    document.getElementById('resultado').innerHTML = resultado;

    const objetoNumero = {
        n1: n1,
        n2: n2,
        op: op,
        resultado: resultado
    };


    const retorno = cadastrarNaAPI(objetoNumero)
    if (retorno) {
        const linhaTabela = `
        <article class="data__card-result">
        <span><strong>Primeiro Número:</strong> ${n1}</span>
        <span><strong>Segundo Número:</strong> ${n2}</span>
        <span><strong>Operação:</strong> ${op}</span>
        <span><strong>Resultado:</strong> ${resultado}</span>
        </article>
    `

        document.getElementById("cadastro").innerHTML += linhaTabela;

        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
        document.getElementById("operacao").value = "";
        document.getElementById("resultado").value = "";

        alert(`Conta foi cadastrada no banco:
                Primeiro Numero: ${n1}
                Segundo Numero: ${n2}
                Operacao: ${op}
                Resultado: ${resultado}
            `);
    }
    else {
        alert("Nao foi possivel cadastrar!");
    }


}

/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if (valor2 == 0) {
        return 'Não é um número';
    }

    return valor1 / valor2;
}

async function cadastrarNaAPI(objetoNumero) {
    try {
        const resposta = await fetch("http://localhost:3000/numeros", {
            method: "POST",
            body: JSON.stringify(objetoNumero),
            headers: { "Content-Type": "application/json; charset=UTF-8" }
        });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function buscarResultados() {
    try {
        const area = await fetch("http://localhost:3000/numeros")
        const dadosRetornados = await retorno.json();

        console.log(dadosRetornados);

        for (let i = 0; i < dadosRetornados.length; i++) {
            const linhaTabela = `<article class="data__card-result">
                <span><strong>Primeiro Número:</strong> ${n1[i]}</span>
                <span><strong>Segundo Número:</strong> ${n2[i]}</span>
                <span><strong>Operação:</strong> ${op[i]}</span>
                <span><strong>Resultado:</strong> ${resultado[i]}</span>
            </article>`

            document.getElementById("cadastro").innerHTML += linhaTabela;
        }
    } catch (error) {
        console.log(error);
    }
}

