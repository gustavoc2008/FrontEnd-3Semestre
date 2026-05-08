import "./Perfil.css"

function Perfil({ nome, idade, profissao }) {
    return (
        <div>
            <h1>
                <span>Nome: {nome}</span>
                <span>Idade: {idade}</span>
                <span>Profissao: {profissao}</span>
            </h1>
        </div>
    );
}

export default Perfil