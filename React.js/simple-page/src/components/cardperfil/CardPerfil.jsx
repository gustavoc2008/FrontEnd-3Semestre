import MyPeople from "../../assets/images.jpg"
import "./CardPerfil.css"

function CardPerfil() {
    return (
        <div className="card-perfil">
            <img className="card-perfil__image" src={MyPeople} alt="imagem do usuario" />
        </div>
    );
}

export default CardPerfil