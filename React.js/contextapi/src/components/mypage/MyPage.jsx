import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"

const MyPage = () => {
    const {usuario} = useContext(UsuarioContext)

    return (
        <>
            <h2>My Page</h2>
            <p>Dados do usuario: {usuario}</p>  
        </>
    )
}

export default MyPage