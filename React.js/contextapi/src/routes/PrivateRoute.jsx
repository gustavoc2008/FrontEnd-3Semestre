import { useContext } from "react"
import { UsuarioContext } from "../components/context/UsuarioContext"
import { Navigate } from "react-router-dom"
import { ProdutoContext } from "../components/context/ProdutoContext"

const PrivateRoute = ({children}) => {
    const {usuario} = useContext(UsuarioContext)

    return (usuario) ? children : <Navigate to={"/"}/>
}

export default PrivateRoute