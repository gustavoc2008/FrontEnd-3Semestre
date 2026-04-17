async function cadastrarContato(objetoContato) {
    console.log(objetoContato);

    // Cadastrar na API
    let resposta = await fetch("http://localhost:3000/contatos", {
        method: "POST",
        body: JSON.stringify(objetoContato), //objeto que esta sendo transformado em JSON
        headers: {"Content-Type" : "application/json; charset=UTF-8"}
    });
}

function validarFormulario() {
    let nome = document.getElementById("nome").value.trim();
    let sobrenome = document.getElementById("sobrenome").value.trim();
    // let email = document.getElementById("email").value.trim();
    // let pais = document.getElementById("pais").value.trim();
    // let ddd = document.getElementById("ddd").value.trim();
    // let telefone = document.getElementById("telefone").value.trim();
    // let cep = document.getElementById("telefone").value.trim();
    // let endereco = document.getElementById("endereco").value.trim();
    // let numero = document.getElementById("numero").value.trim();
    // let apto = document.getElementById("apto").value.trim();
    // let bairro = document.getElementById("bairro").value.trim();
    // let cidade = document.getElementById("cidade").value.trim();
    // let estado = document.getElementById("estado").value.trim();
    // let anotacoes = document.getElementById("anotacoes").value.trim();

    let quantidadeErros = 0;


    if (nome == "") {
        formError("nome");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("nome");
    }

    if (sobrenome == "") {
        formError("sobrenome");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("sobrenome");
    }


    // cadastrar la na api
    // gerar um objeto "literal" com os dados
    let objetoContato = {
        nome: nome,
        sobrenome: sobrenome
    };

    let cadastrado = cadastrarContato(objetoContato);
    return false;


    // if (email == "") {
    //     formError("email");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("email");
    // }

    // if (pais == "") {
    //     formError("pais");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("pais");
    // }
    // if (ddd == "") {
    //     formError("ddd");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("ddd");
    // }
    // if (telefone == "") {
    //     formError("telefone");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("telefone");
    // }
    // if (cep == "") {
    //     formError("cep");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("cep");
    // }
    // if (endereco == "") {
    //     formError("endereco");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("endereco");
    // }
    // if (numero == "") {
    //     formError("numero");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("numero");
    // }
    // if (apto == "") {
    //     formError("apto");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("apto");
    // }
    // if (bairro == "") {
    //     formError("bairro");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("bairro");
    // }
    // if (cidade == "") {
    //     formError("cidade");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("cidade");
    // }
    // if (estado == "") {
    //     formError("estado");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("estado");
    // }
    // if (anotacoes == "") {
    //     formError("anotacoes");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("anotacoes");
    // }


    if (quantidadeErros != 0) {
        alert("Existem " + quantidadeErros + " campo(s) obrigatorio(s) nao preenchido(s).");
        quantidadeErros = 0;
    }

    // console.log(`
    // Aluno: ${nome} ${sobrenome} |
    // Email: ${email} |
    // `);
}

function formError(fildId) {
    document.getElementById(fildId).style.border = "2px solid red";
}

function reiniciaBorda(fildId) {
    document.getElementById(fildId).style.border = "none";
}

async function buscarEndereco(cep) {
    if (cep.trim().length < 8) {
        alert("CEP invalido. O CEP deve conter 8 digitos!");
        return false;
    }

    try {

        aguardandoCampos();

        let retorno = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
        let dados = await retorno.json();
        console.log(dados);

        document.getElementById("endereco").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;
    }
    catch {
        alert("Erro ao procurar Endereco!");
    }
}

function aguardandoCampos() {
    document.getElementById("endereco").value = "Aguardando...";
    document.getElementById("bairro").value = "Aguardando...";
    document.getElementById("cidade").value = "Aguardando...";
    document.getElementById("estado").value = "Aguardando...";
}