import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroFilme from "../pages/CadastroFilmes/CadastroFilmes";
import CadastroGenero from "../pages/CadastroGenero/CadastroGenero";
import Login from "../pages/Login/Login";



const Rotas = () => {
    return (
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/filme" element={<CadastroFilme/>} />
                <Route path="/genero" element={<CadastroGenero/>} />
            </Routes>
          
        </BrowserRouter>
    );
};

export default Rotas;  