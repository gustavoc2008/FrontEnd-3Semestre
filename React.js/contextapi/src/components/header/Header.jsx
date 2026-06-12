import { useContext } from "react"
import { Link } from "react-router-dom"
import { UsuarioContext } from "../context/UsuarioContext"

const Header = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext)

    const logout = () => {
        localStorage.removeItem("Usuario")
        setUsuario(null)
    }

    return (
        <header>
            <Link to={"/"}>Home</Link> {""}
            <Link to={"/perfil"}>Perfil</Link> {""}
            <Link to={"/mypage"}>My Page</Link> {""}
            <Link to={"/produto"}>Cadastrar Produto</Link> {""}
            <span>( {usuario} )</span>
            <button
                onClick={() => {
                    logout()    
                }}
            >
                Sair
            </button>
        </header>
    )
}

export default Header