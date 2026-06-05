import "./Login.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <>
            <Header />
            <h1>Login</h1>
            <Link to="/filme">Filmes</Link>
            <Link to="/genero">Generos</Link>
            <Footer />
        </>
    );
};

export default Login;
 