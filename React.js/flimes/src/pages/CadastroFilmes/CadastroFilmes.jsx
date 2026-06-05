import "./CadastroFilmes.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/Cadastro/Cadastro";
import { useState, useEffect } from "react";
import { Alerta } from "../../components/alerta/Alerta";
import Lista from "../../components/lista/Lista";
import api from "../../services/Services";
import axios from "axios";

const CadastroFilme = () => {
  const [valor, setValor] = useState("");
  const [idGenero, setIdGenero] = useState("");
  const [idFilme, setIdFilme] = useState(0);
  const [editar, setEditar] = useState(false);
  const [ListaFilmes, setListaFilmes] = useState([]);
  const [listaGeneros, setListaGeneros] = useState([]);

  useEffect(() => {
    getGeneros();
    getFilmes();
  }, []);

  const getGeneros = async () => {
    try {
      const retorno = await api.get("/Genero");
      setListaGeneros(retorno.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFilmes = async () => {
    try {
      const retorno = await api.get("/Filme");
      setListaFilmes(retorno.data);
    } catch (error) {
      console.log(error);
    }
  };

  const preEditar = (item) => {
    setValor(item.titulo);
    setIdGenero(item.idGenero)
    setEditar(true);
    setIdFilme(item.idFilme);
  };

  const editarFilme = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("Titulo", valor);
    formData.append("IdGenero", parseInt(idGenero));

    try {
      await api.put(`/Filme/${idFilme}`, formData);
      Alerta({
        title: "Sucesso!",
        text: "Filme atualizado com sucesso!",
        icon: "success",
      });
      limparFormulario();
      getFilmes();
    } catch (error) {
      console.log(error.response?.data);
      Alerta({
        title: "Erro!",
        text: "Erro ao atualizar o filme.",
        icon: "error",
      });
    }
  };

  console.log("Título:", valor);
  console.log("IdGenero:", idGenero);

  const cadastrarFilme = async (e) => {
    e.preventDefault();

    if (valor.trim().length === 0 || !idGenero) {
      Alerta({
        title: "Atenção!",
        text: "Por favor, preencha o título e selecione um gênero!",
        icon: "warning",
      });
      return;
    }

    const formData = new FormData();

    formData.append("Titulo", valor);
    formData.append("IdGenero", parseInt(idGenero));

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      console.log("Titulo:", valor);
      console.log("Genero:", idGenero);

      await api.post("/Filme", formData);

      Alerta({
        title: "Sucesso!",
        text: "Filme cadastrado com sucesso!",
        icon: "success",
      });

      limparFormulario();
      getFilmes();
    } catch (error) {
      console.log("Erro:", error.response?.data);

      Alerta({
        title: "Erro!",
        text: "Erro ao cadastrar o filme.",
        icon: "error",
      });
    }
  };

  const limparFormulario = () => {
    setValor("");
    setIdGenero("");
    setIdFilme(0);
    setEditar(false);
  };

  const excluirFilme = async (item) => {
    try {
      await api.delete(`/Filme/${item.idFilme}`);
      Alerta({
        title: "Sucesso!",
        text: "Filme excluído com sucesso!",
        icon: "success",
      });
      getFilmes();
    } catch (error) {
      console.log(error);
      Alerta({
        title: "Erro!",
        text: "Erro ao excluir o filme.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Header />

      <main>
        <Cadastro
          tituloCadastro={editar ? "Edição de Filme" : "Cadastro de Filme"}
          // visibilidade="none"
          placeholder="Filme"
          funcCadastro={editar ? editarFilme : cadastrarFilme}
          valor={valor}
          setValor={setValor}
          valorSelect={idGenero}
          setValorSelect={setIdGenero}
          btnEditar={editar}
          cancelarEdicao={limparFormulario}
          listaGeneros={listaGeneros}
        />
        <Lista
          tituloLista="Lista de Filmes"
          // visibilidade="none"
          lista={ListaFilmes}
          tipoLista="filme"
          listaGeneros={listaGeneros}
          funcExcluir={excluirFilme}
          funcEditar={preEditar}
        />
      </main>

      <Footer />
    </>
  );
};

export default CadastroFilme;
