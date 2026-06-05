import { useEffect, useState } from "react"
import { UsuarioContext } from "../context/UsuarioContext"

const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null)
    // const [ listaUsuarios, setListaUsuarios ] = useState([])

    useEffect(() => {
        const usuarioStorage = JSON.parse(localStorage.getItem("Usuario")) || ""
        setUsuario(usuarioStorage)
    }, [])

    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider