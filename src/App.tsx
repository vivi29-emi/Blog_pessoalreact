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
import { Provider } from 'react-redux';
import store from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <Provider store={store}>
    <ToastContainer />
    <Router>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/cadastroUsuario" element={<CadastroUsuario />} />

        <Route path="/posts" element={<ListaPostagem />} />

        <Route path="/formularioPostagem" element={<CadastroPost />} />

        <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

        <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

        <Route path="/temas" element={<ListaTema />} />

        <Route path="/formularioTema" element={<CadastroTema />} />

        <Route path="/formularioTema/:id" element={<CadastroTema />} />

        <Route path="/deletarTema/:id" element={<DeletarTema />} />


      </Routes>
    </div>
    <Footer />

  </Router>
  </Provider>
  )
}

export default App;
