    import { useContext, useState } from "react";
    import { ProdutoContext } from "../context/ProdutoContext";
    import ListarProduto from "../listarProduto/ListarProduto"

    const CadastroProduto = () => {
        const [nome, setNome] = useState("");
        const [preco, setPreco] = useState("");

        const { produtos, setProdutos } = useContext(ProdutoContext);

        const cadastrarProduto = (e) => {
            e.preventDefault();

            const objCadastro = {
                nome: nome,
                preco: preco
            };

            setProdutos([...produtos, objCadastro]);

            setNome("");
            setPreco("");
        };

        return (
            <>
                <h2>Cadastro de Produto</h2>

                <form onSubmit={cadastrarProduto}>
                    <input
                        type="text"
                        placeholder="Nome do produto"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Preço"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />

                    <button type="submit">
                        Cadastrar
                    </button>
                </form>

                <ListarProduto/>
            </>
        );
    };

    export default CadastroProduto;