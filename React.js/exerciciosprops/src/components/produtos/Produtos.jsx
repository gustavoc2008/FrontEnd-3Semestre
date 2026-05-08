import Produto from "../exercicio02/Produto"
import "./Produtos.css"

function Produtos() {
    const Produtos = [
        {
            nome: "Tenis de Marca",
            preco: 550,
            descricao: "Tenis Chique!"
        },
        {
            nome: "Camiseta de Marca",
            preco: 270,
            descricao: "Camiseta Chique e Confortavel!"
        }
    ]
    return(
        Produtos.map((produtinho) => {
            return (
                <Produto 
                    nome={produtinho.nome}
                    preco={produtinho.preco}
                    descricao={produtinho.descricao}
                />
            )
        })
    )
}

export default Produtos