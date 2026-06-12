import "./Header.css";
import Logo from "../../assets/img/logo.svg"
import { Link, useNavigate } from "react-router-dom";
import Botao from "../botao/Botao";
import { UsuarioContext } from "../../components/context/UsuarioContext";
import { useContext } from "react";
import PrivateRoute from "../../routes/PrivateRoute";

const Header = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext)

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("Usuario")
        setUsuario(null)
        navigate("/")
    }

    return (
        <PrivateRoute>
            <header>
                <div className="layout_grid cabecalho">
                    {/* Ao clicar no link, redireciona para a tela login */}
                    <Link to="/">
                        <img src={Logo} alt="Logo do Filmoteca" />
                    </Link>

                    <nav className="nav_header">
                        <Link className="link_header" to="/Filme">Filme</Link>
                        <Link className="link_header" to="/Genero">Gênero</Link>
                        <button onClick={logout}>
                            Sair
                        </button>
                    </nav>
                </div>
            </header>
        </PrivateRoute>
    )
}

export default Header;