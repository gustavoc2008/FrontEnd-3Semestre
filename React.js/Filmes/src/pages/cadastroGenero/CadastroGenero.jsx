import "./CadastroGenero.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { useEffect, useState } from "react"
import api from "../../Services/Services"

const CadastroGenero = () => {

    const [valor, setValor] = useState("")
    const [listaGeneros, setListaGeneros] = useState([])

    // GET
    const getGeneros = async () => {

        try {

            const retornoAPI = await api.get("/generos")

            setListaGeneros(retornoAPI.data)

        } catch (error) {

            alert("Problemas ao carregar API")

        }
    }

    useEffect(() => {

        getGeneros()

    }, [])

    // POST
    const cadastrarGenero = async (e) => {

        e.preventDefault()

        if (valor.trim().length === 0) {

            alert("Preencher o gênero")

            return
        }

        const objCadastro = {
            nome: valor
        }

        try {

            await api.post("/generos", objCadastro)

            alert("Cadastrado com sucesso!")

            getGeneros()

            limparFormulario()

        } catch (error) {

            alert("Erro ao cadastrar")

            console.log(error)

        }
    }

    // LIMPAR
    const limparFormulario = () => {

        setValor("")

    }

    // DELETE
    const excluirGenero = async (item) => {

        try {

            const retornoAPI = await api.delete(`/generos/${item.id}`)

            alert("Deletado com sucesso!")

            getGeneros()

        } catch (error) {

            alert("Erro ao deletar")

            console.log(error)

        }
    }

    // EDITAR
    const editarGenero = () => {

        alert("Função editar em desenvolvimento")

    }

    return (
        <>
            <Header />

            <main>

                <Cadastro
                    tituloCadastro="Cadastro de Gênero"
                    visibilidade="none"
                    placeholder="gênero"

                    funcCadastro={cadastrarGenero}

                    valor={valor}

                    setValor={setValor}
                />

                <Lista
                    tituloLista="Lista de Gêneros"

                    visibilidade="none"

                    lista={listaGeneros}

                    tipoLista="genero"

                    funcExcluir={excluirGenero}

                    funcEditar={editarGenero}
                />

            </main>

            <Footer />
        </>
    )
}

export default CadastroGenero