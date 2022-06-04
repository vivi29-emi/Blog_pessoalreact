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

        </Routes>
      </div>
      <Footer /> {/*Rodapé*/}
    </Router>
  )
}

export default App;
