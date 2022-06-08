//Camada responsável para as regras de négocio e as requisiões com o back-end.
import axios from 'axios';// <-- permite fazermos requisições HTTP, ou seja, fazer requisições ao Back-End

//inicializando o axios, colocando dentro do objeto api, com o método create permitira harmazenar dentro do axios o endereço da minha api.

export const api = axios.create ({
    baseURL: "https://growcropssz.herokuapp.com/"
})

// * métodos que fazem a requisição dentro da api
    export const cadastroUsuario = async (url:any,dados:any,setDados:any) =>{ //<-- metodo asyncrono pois o front irá aguarde(await) o back fazer todas as validações, parametros url = base url e o caminho para acessa ex /usuario/cadastrarusuario e o Dados = recebe todos os atributos inserido no back, setDado= recebe a respota da api contendo os dados do usuario
    const resposta = await api.post(url,dados)// <-- acionando o método post passando dois parametros 
    setDados(resposta.data)
    }

    export const login = async (url:any,dados:any,setDados:any) =>{ //<-- any significa que o parametro pode receber variados dados.
    const resposta = await api.post(url,dados)
    setDados(resposta.data.token)// <-- recebe os dados da resposta sendo dentro da caixa data receberá somente o token do usuário
    }
    //* Busca todos os dados
    export const busca = async (url:any,setDados:any,header:any) =>{ 
        const resposta = await api.get(url,header)
        setDados(resposta.data) 
        }
        // Busca todos temas e postagens pelo id
        export const buscaId = async(url:any, setDados:any, header:any) =>{
            const resposta = await api.get(url,header)
            setDados(resposta.data)
        }
        //Cadastra as postagens e temas
        export const post = async(url:any, dados:any, setDados:any, header:any) =>{
            const resposta = await api.post(url,dados,header)
            setDados(resposta.data)
        }

        //Atualiza todos os temas e postagens
        export const put = async(url:any, dados:any, setDados:any, header:any) =>{
            const resposta = await api.put(url,dados,header)
            setDados(resposta.data)
        }
        // deleta todas as postagens e temas
        export const deleteId = async(url:any, header:any) =>{
            await api.delete(url,header)
            
        }




    

