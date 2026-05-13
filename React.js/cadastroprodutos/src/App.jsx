import "./App.css"
import Header from "./header/header"
import CadastroFrutasPage from "./pages/cadastrofruta/cadastrofrutapage"
import CadastroProdutoPage from "./pages/cadastroproduto/cadastroprodutopage"
import HomePage from "./pages/home/homepage"
import QuemSomosPage from "./pages/quemsomos/quemsomospage"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
        <Header />
          <Routes>
            <Route element={<HomePage />} path='/' />
            <Route element={<QuemSomosPage />} path='/quemsomos' />
            <Route element={<CadastroFrutasPage />} path='/frutas' />
            <Route element={<CadastroProdutoPage />} path='/produtos' />
          </Routes>
        </BrowserRouter>
    )
  }

export default App