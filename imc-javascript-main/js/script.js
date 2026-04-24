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


    const objetoIMC = {
        nome: nome,
        altura: altura,
        peso: peso,
        imc: imc,
        textoSituacao: textoSituacao
    };

    const retorno = cadastrarNaAPI(objetoIMC)//retorna true or false
    if (retorno) {
        const linhaTabela = `<tr>
                <th>${nome}</th>
                <th>${altura}</th>
                <th>${peso}</th>
                <th>${imc.toFixed(2)}</th>
                <th>${textoSituacao}</th>
                </tr>`

        document.getElementById("cadastro").innerHTML += linhaTabela;

        document.getElementById("nome").value = "";
        document.getElementById("altura").value = "";
        document.getElementById("peso").value = "";

        alert(`${nome} foi cadastrado no banco:
                Nome: ${nome}
                IMC: ${imc}
                Situacao: ${textoSituacao}
            `);
    } else {
        alert("Nao foi possivel cadastrar!");
    }

}

async function cadastrarNaAPI(objetoIMC) {
    //chamar o fetch e cadastrar na API com POST
    try {
        const resposta = await fetch("http://localhost:3000/imc", {
            method: "POST",
            body: JSON.stringify(objetoIMC),
            headers: { "Content-Type": "application/json; charset=UTF-8"    }
        });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }

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
    else if (imc < 40) {
        return "Obesidade 2";
    }
    else {
        return "Obesidade 3";
    }
}

async function buscarIMCs() {
    try {
        const retorno = await fetch("http://localhost:3000/imc")
        const dadosRetornados = await retorno.json();

        console.log(dadosRetornados);//dados do cadastro

        for (let i = 0; i < dadosRetornados.length; i++) {
            const linhaTabela = `<tr>
                <th>${dadosRetornados[i].nome}</th>
                <th>${dadosRetornados[i].altura}</th>
                <th>${dadosRetornados[i].peso}</th>
                <th>${dadosRetornados[i].imc.toFixed(2)}</th>
                <th>${dadosRetornados[i].textoSituacao}</th>
                </tr>`

            document.getElementById("cadastro").innerHTML += linhaTabela;
        }

    } catch (error) {
        console.log(error);
    }
}

