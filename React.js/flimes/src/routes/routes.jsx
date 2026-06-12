import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CadastroFilme from "../pages/CadastroFilmes/CadastroFilmes";
import CadastroGenero from "../pages/CadastroGenero/CadastroGenero";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

const Rotas = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/filme" element={
                    <PrivateRoute>
                        <CadastroFilme />
                    </PrivateRoute>
                } />
                <Route path="/genero" element={
                    <PrivateRoute>
                        <CadastroGenero />
                    </PrivateRoute>
                } />
                {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>

        </BrowserRouter>
    );
};

export default Rotas;  