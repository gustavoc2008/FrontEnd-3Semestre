import { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

const Home = () => {
    const { usuario } = useState("Gustavo");

    return (
        <>
            <h2>Home</h2>
            <p>Usuario: {usuario}</p>
        </>
    );
};

export default Home;