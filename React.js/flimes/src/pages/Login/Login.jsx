import "./Login.css";
import Botao from "../../components/botao/Botao";
import Logo from "../../assets/img/logo.svg"
import { useContext, useState } from "react";
import { UsuarioContext } from "../../components/context/UsuarioContext";
import { useNavigate } from "react-router-dom";
import api from "../../Services/services";
import { Alerta } from "../../components/alerta/Alerta";
import { jwtDecode } from "jwt-decode";

const Login = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext)

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault();

        const dadosLogin = {
            email,
            senha
        }

        try {
            const resposta = await api.post("/Login", dadosLogin);

            const token = resposta.data.token;

            const usuarioDecoded = jwtDecode(token);

            console.log(usuarioDecoded);

            setUsuario(usuarioDecoded)
            localStorage.setItem("token", token)
            navigate("/genero");

        } catch (error) {
            Alerta({
                title: "Login",
                text: "Usuario ou Senha invalidos",
                icon: "error",
                confirmButtonText: "OK"
            })
        }
    };

    return (
        <main className="main_login">
            <div className="banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo do Filmoteca" />
                <form onSubmit={login} action="" className="form_login">
                    <h1>Login</h1>
                    <div className="campos_login">
                        <div className="campo_input">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="campo_input">
                            <label htmlFor="senha">Senha:</label>
                            <input type="password" name="senha" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                    </div>
                    <Botao nomeDoBotao="Entrar" />
                </form>
            </section>
        </main>
    );
};

export default Login;
