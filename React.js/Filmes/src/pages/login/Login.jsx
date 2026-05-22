import Footer from "../../components/footer/Footer"
import Headers from "../../components/header/Header"
import "./Login.css"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
        <Headers />
            <h1>Login</h1>
            <Link to="/generos"> Generos </Link>
        <Footer />
        </>
    )
}

export default Login