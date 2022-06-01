//Camada responsável para as regras de négocio e as requisiões com o back-end.
import axios from 'axios';// <-- permite fazermos requisições HTTP, ou seja, fazer requisições ao Back-End

//inicializando o axios, colocando dentro do objeto api, com o método create permitira harmazenar dentro do axios o endereço da minha api.

export const api = axios.create ({
    baseURL: "https://growcropssz.herokuapp.com/"
})

// métodos que fazem a requisição dentro da api
    export const cadastroUsuario = async (url:any,dados:any,setDados:any) =>{ //<-- metodo asyncrono pois o front irá aguarde(await) o back fazer todas as validações, parametros url = base url e o caminho para acessa ex /usuario/cadastrarusuario e o Dados = recebe todos os atributos inserido no back, setDado= recebe a respota da api contendo os dados do usuario
    const resposta = await api.post(url,dados)// <-- acionando o método post passando dois parametros 
    setDados(resposta.data)
    }

    export const login = async (url:any,dados:any,setDados:any) =>{ //<-- any significa que o parametro pode receber variados dados.
    const resposta = await api.post(url,dados)
    setDados(resposta.data.token)// <-- recebe os dados da resposta sendo dentro da caixa data receberá somente o token do usuário
    }

