import './App.css'
import Saudacao from './components/exercicio01/saudacao';
import Produto from './components/exercicio02/Produto';
import Perfil from './components/exercicio03/Perfil';
import Botao from './components/exercicio04/Botao';
import Filme from './components/exercicio05/Filme';
import Aluno from './components/exercicio06/Aluno';
import Card from './components/exercicio07/Card';
import Contato from './components/exercicio08/Contato';
import Jogo from './components/exercicio09/Jogo';
import foto from "../src/assets/EGS_TheLastofUsPartI_NaughtyDogLLC_S1_2560x1440-3659b5fe340f8fc073257975b20b7f84.avif"
import Produtos from './components/produtos/Produtos';
import ItemLoja from './components/exercicio10/ItemLoja';
// import Title from './components/title/Title';

function App() {
  return (
    // <>
    // {/* <Title texto="Gustavo" sobrenome="Costa" idade= {17}/>
    // <Title texto="Milena" sobrenome="Mares"/>
    // <Title texto="Anne" sobrenome="Nicole"/> */}

    // {/* <Saudacao nome="Gustavo"/>
    // <Saudacao nome="Milena"/>
    // <Saudacao nome="Anne"/> */}

    // {/* Exercicio02 */}
    // {/* <Produto nome="AirFryer" preco={100} descricao="AirFryer EletroLux"/>
    // <Produto nome="Geladeira" preco={200} descricao="Geladeira EletroLux"/>
    // <Produto nome="Filtro de Agua" preco={150} descricao="Filtro de Agua EletroLux"/> */}

    // {/* Exercicio03 */}
    // {/* <Perfil nome="Gustavo" idade={17} profissao="Desenvolvedor"/>
    // <Perfil nome="Milena" idade={18} profissao="Desenvolvedor"/>
    // <Perfil nome="Anne" idade={17} profissao="Desenvolvedor"/> */}

    //   {/* Exercicio04 */}
    //   {/* <Botao texto="Cadastrar" cor="green"/>
    //   <Botao texto="Limpar" cor="gray"/>
    //   <Botao texto="Sair" cor="red"/> */}

    //   {/* Exercicio05 */}
    //   {/* <Filme titulo="Gente Grande" ano={2011} genero="Comedia" nota={10}/>
    //   <Filme titulo="Deu a Louca na Macaca" ano={2008} genero="Comedia/Suspense" nota={11}/>
    //   <Filme titulo="Rapunzel" ano={2015} genero="Romance/Aventura" nota={8}/> */}

    //   {/* Exercicio06 */}
    //   {/* <Aluno nome="Gustavo" curso="TI" imagem={foto}/> */}

    //   {/* Exercicio07 */}
    //   {/* <Card>
    //     <Produto nome="AirFryer" preco={100} descricao="AirFryer EletroLux" />
    //     <Produto nome="Geladeira" preco={200} descricao="Geladeira EletroLux" />
    //     <Produto nome="Filtro de Agua" preco={150} descricao="Filtro de Agua EletroLux" />
    //   </Card> */}

    //   {/* Exercicio08 */}
    //   {/* <Contato nome="Gustavo" telefone="(11) 91502-1323" email="costagustavo2110@gmail.com"/>
    //   <Contato nome="Milena" telefone="(11) 99853-0923" email="milenamares@gmail.com"/>
    //   <Contato nome="Anne" telefone="(11) 99702-8123" email="annenicolle@gmail.com"/>
    //   <Contato nome="Matheus" telefone="(11) 95612-9283" email="matheusbecker@gmail.com"/>
    //   <Contato nome="Felipe" telefone="(11) 97102-1423" email="felipetorolho@gmail.com"/> */}

    //   {/* Exercicio09 */}
    //   {/* <Jogo nome="The Last Of Us" plataforma="Video Games/PC" preco={89.90} imagem={foto}/> */}
    // // {/* </> */}

    // Exercicio10
    <div className='container'>
      <ItemLoja
        nome="Notebook Gamer"
        preco={4500}
        categoria="Eletrônicos"
        estoque={0}
      />
    </div>

    // <Produtos />
  );
}

export default App
