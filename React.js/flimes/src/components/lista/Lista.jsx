import "./Lista.css";

// Importação de imagens:
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";

const Lista = (props) => {

    const buscarGenero = (idGenero) => {
        const genero = props.listaGeneros?.find(
            (g) => g.idGenero === idGenero
        );

        return genero ? genero.nome : "-";
    };

    return (
        <section className="layout_grid">
            <div className="listagem">

                <h1>{props.tituloLista}</h1>
                <hr />

                <div className="tabela">
                    <table>
                        <thead>
                            <tr className="table_cabecalho">
                                <th>Nome</th>
                                <th style={{ display: props.visibilidade }}>Gênero</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>

                        <tbody>
                            {props.lista && props.lista.length > 0 ? (
                                props.lista.map((item) => (
                                    <tr
                                        className="item_lista"
                                        key={item.idFilme || item.idGenero || item.id}
                                    >
                                        <td data-cell="Nome">
                                            {props.tipoLista === "genero"
                                                ? item.nome
                                                : item.titulo}
                                        </td>

                                        <td
                                            data-cell="Gênero"
                                            style={{ display: props.visibilidade }}
                                        >
                                            {props.tipoLista === "filme"
                                                ? buscarGenero(item.idGenero)
                                                : "-"}
                                        </td>

                                        <td data-cell="Editar">
                                            <button
                                                className="icon"
                                                onClick={() => props.funcEditar(item)}
                                            >
                                                <img src={Editar} alt="Caneta" />
                                            </button>
                                        </td>

                                        <td data-cell="Excluir">
                                            <button
                                                className="icon"
                                                onClick={() => props.funcExcluir(item)}
                                            >
                                                <img src={Excluir} alt="Lixeira" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">
                                        Nenhum registro encontrado.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Lista;