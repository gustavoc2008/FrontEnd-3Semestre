import './App.css'
import Header from './components/header/Header';
import Subtitle from './components/subtitle/Subtitle';
import Title from './components/title/title';

function App() {

  return (
    <>
      <Header />
      <Title texto="Titulo do App"/>
      <Subtitle texto = "Minha Pagina"/>
      <Subtitle gu = "bacana" texto = "Minha Pagina 2"/>
    </>
  );
}

export default App
