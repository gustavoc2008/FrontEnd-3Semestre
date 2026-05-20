import "./produto.css"
import { useEffect, useState } from "react"
import img from '../../assets/image.jpg'
import axios from "axios"
import api from "../../services/services"

export default function Produto() {

    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState(0)
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [imagem, setImagem] = useState(img)
    const [arrProdutos, setArrProdutos] = useState([])
    const [editar, setEditar] = useState(false)
    // Estado para guardar o ID do produto que está sendo editado
    const [idEdicao, setIdEdicao] = useState(null)

    // Transformamos a busca em uma função reaproveitável
    async function buscarProdutos() {
        try {
            const retornoAPI = await api.get('/produtos')
            const dados = await retornoAPI.data
            setArrProdutos(dados)
        } catch (error) {
            console.log("Erro ao buscar os produtos")
            console.log(error)
        }
    }

    // Busca os produtos ao carregar a página
    useEffect(() => {
        buscarProdutos()
    }, [])

    function validarFormulario() {
        if (nome.trim().length == 0 || descricao.trim().length == 0 || isNaN(preco) || preco <= 0 || isNaN(quantidade) || quantidade <= 0) {
            alert("Preencha todos os campos corretamente!")
            return false;
        }
        return true;
    }

    async function cadastrarProduto(e) {
        e.preventDefault()

        if (!validarFormulario()) return;

        const objCadastro = {
            nome,
            preco,
            descricao,
            quantidade,
            imagem: "laptop.png.jpg"
        }

        try {
            const retornoAPI = await api.post('/produtos', objCadastro)

            if (retornoAPI.status == 201) {
                const dadosCadastrados = await retornoAPI.data
                alert("Produto cadastrado com sucesso!")
                buscarProdutos() // Atualiza a lista vinda da API
                limparFormulario()
            } else {
                alert("Problema inesperado ao cadastrar")
            }
        } catch (error) {
            console.log("Não foi possível salvar os dados", error)
        }
    }

    // NOVA FUNÇÃO: Faz o PUT para editar os dados na API
    async function salvarEdicao(e) {
        e.preventDefault()

        if (!validarFormulario()) return;

        const objEditado = {
            nome,
            preco,
            descricao,
            quantidade,
            imagem: "image.jpg"
        }

        try {
            const retornoAPI = await api.put(`/produtos/${idEdicao}`, objEditado)

            if (retornoAPI.status == 200) {
                alert("Produto atualizado com sucesso!")
                setEditar(false)
                setIdEdicao(null)
                buscarProdutos() // Atualiza a lista novamente refletindo as alterações
                limparFormulario()
            } else {
                alert("Erro ao atualizar o produto")
            }
        } catch (error) {
            console.log("Erro na requisição PUT:", error)
        }
    }

    function limparFormulario() {
        setIdEdicao(0)
        setNome("")
        setDescricao("")
        setQuantidade(0)
        setPreco(0)
        setIdEdicao(null)
    }

    async function deletar(id) {

        if(!confirm("Voce quer realmente apagar o produto")) {
            return false
        }

        try {
            const retornoAPI = await api.delete(`/produtos/${id}`)

            if (retornoAPI.status == 200) {
                alert("Produto deletado com sucesso!")
                buscarProdutos() // Atualiza a lista após deletar
            } else {
                alert("Não foi possível deletar o produto")
            }
        } catch (error) {
            alert("Não foi possível deletar o produto")
            console.log(error)
        }
    }

    // Ativa o modo de edição e joga os valores no formulário
    function prepararEdicao(prod) {
        setEditar(true)
        setIdEdicao(prod.id) // Guarda o ID para o PUT
        setNome(prod.nome)
        setPreco(prod.preco)
        setDescricao(prod.descricao)
        setQuantidade(prod.quantidade)
    }

    return (
        <>
            <header className="cabecalho">
                <h1 className="titulo--cinza" >SENAI</h1>
                <h1 className="titulo--vermelho">LOJA</h1>
            </header>

            {/* O onSubmit agora decide dinamicamente qual função chamar */}
            <form className="formzin" onSubmit={editar ? salvarEdicao : cadastrarProduto}>
                <div className="input--dados">
                    <input className="input--metade"
                        type="text"
                        id="nome"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} />

                    <input className="input--metade"
                        type="number"
                        id="preco"
                        placeholder="Preço"
                        value={preco}
                        onChange={(e) => setPreco(parseFloat(e.target.value))} />

                    <input className="input--metade"
                        type="number"
                        id="quantidade"
                        placeholder="Quantidade"
                        value={quantidade}
                        onChange={(e) => setQuantidade(parseInt(e.target.value))} />

                    <input className="input--metade"
                        type="text"
                        id="descricao"
                        placeholder="Descrição"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)} />
                </div>

                {/* condicao para exibir o botao Cancelar */}
                {editar &&
                    <button type="button" className="btn--cadastro"
                        onClick={() => {
                            setEditar(false); //faz esconder o batao Editar
                            setIdEdicao(0)
                            limparFormulario(); //reseta os states dos inputs ( os campos ) 
                        }}
                    >
                        Cancelar
                    </button>
                }

                {" "}
                <button type="submit" className="btn--cadastro">
                    {editar ? "Salvar Alterações" : "Adicionar Produto"}
                </button>
            </form>

            <section className="produtos">
                {arrProdutos.map((prod) => (
                    <div key={prod.id} className="produto">
                        <h2>{prod.nome}</h2>
                        <p>Preço: R$ {prod.preco.toFixed(2)}</p>
                        <p>Descrição: {prod.descricao}</p>
                        <p>Quantidade: {prod.quantidade}</p>
                        <img src={img} alt={prod.nome} />

                        <a className="delet" href="" onClick={(e) => {
                            e.preventDefault()
                            deletar(prod.id)
                        }}>
                            Apagar
                        </a>

                        <button className="produtos__bnt-comprar">comprar</button>

                        <a className="delet" href="" onClick={(e) => {
                            e.preventDefault()
                            prepararEdicao(prod) // Passa o objeto inteiro para facilitar
                        }}>
                            Editar
                        </a>
                    </div>
                ))}
            </section>
        </>
    )
}