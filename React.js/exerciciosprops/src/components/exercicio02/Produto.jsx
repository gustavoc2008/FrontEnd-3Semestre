import "./Produto.css"

function Produto({ nome, preco, descricao }) {
    return (
        < h1 > Nome do Produto: {nome}
                Preco: {preco}
                Descricao: {descricao}
        </h1 >
    )
}

export default Produto