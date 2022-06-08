import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/Home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import './App.css';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listaTemas/ListaTema';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastrarTema/CadastroTema';
import DeletarPostagem from './components/postagens/cadastroPost/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';



function App() {
  return (
    <Router>{/*Da o acesso a todas as rotas dentro do site */}
      <Navbar /> {/*Menu */}
      <div style={{ minHeight: '100vh' }}>
        <Routes> {/*Antigo Switch, faz a verificação e o acesso a todas as rotas dentro da URL do site */}
          <Route path="/" element={<Login />} /> {/* faz o acesso a uma rota específica dentro da URL, nesse exemplo para o usuario acessar diretamente o login ou a tela de entrada do site*/}
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
           <Route path="/cadastroUsuario" element={<CadastroUsuario/>}/>
           <Route path="/temas" element={<ListaTema/>}/>
           <Route path="/posts" element={<ListaPostagem/>}/>
           <Route path="/formularioPostagem" element={<CadastroPost/>}/> 
           <Route path="/formularioPostagem/:id" element={<CadastroPost/>}/>
           <Route path="/formularioTema" element={<CadastroTema/>}/>
           <Route path="/formularioTema/:tema" element={<CadastroTema/>}/>
           <Route path="/deletarPostagem/:id" element={<DeletarPostagem/>}/>
           <Route path="/deletarPostagem/:tema" element={<DeletarTema/>}/>



        </Routes>
      </div>
      <Footer /> {/*Rodapé*/}
    </Router>
  )
}

export default App;
