import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UsuarioProvider from './components/provider/UsuarioProvider.jsx'
import ProdutoProvider from './components/provider/ProdutoProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
      <ProdutoProvider>
      <App />
      </ProdutoProvider>
    </UsuarioProvider>
  </StrictMode>,
)
