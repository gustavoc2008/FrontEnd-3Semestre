import { useContext } from "react";
import { ProdutoContext } from "../context/ProdutoContext";

const ListarProduto = () => {
    const { produtos } = useContext(ProdutoContext);

    return (
        <>
            <h2>Lista de Produtos</h2>

            {produtos.map((produto) => (
                <div>
                    <p>{produto.nome} R${produto.preco}</p>
                </div>
            ))}
        </>
    );
};

export default ListarProduto;