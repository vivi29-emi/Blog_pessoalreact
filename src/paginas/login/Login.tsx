import React, { useState, ChangeEvent,useEffect} from 'react';
import { Grid, Box, Typography, TextField, Button} from '@material-ui/core';
import { Link,useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import {login} from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';


function Login() {

    let navigate = useNavigate();//função utilizada para controlar a navegação da pessoa usuária dentro do site.
    

    const [token,setToken]= useLocalStorage('token');// processo que faz o controle do token dentro do localStorage.
// Inicializando um estado o componete por meio do UseState.
    const [UserLogin, setUserLogin] = useState<UserLogin>(//useState componente dos hooks responsável por fazer o controle de um componente desde a inicialização e a redenrização adicionando um estado a um componete funcional
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        }
    )
// updatedModel responsável por fazer atualização da model usuarioLogin trabalhando em conjunto com o userState
    function updatedModel(e: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...UserLogin,
            [e.target.name]: e.target.value // Toda vez que o usuario acessar uma das propriedades dentro do campo textfild essa método será acionado, e depois atribuido os valores que estão fora dos colchetes
        })
    }
//Executa funções sempre que uma de sua variáveis de dependência sofrer uma alteração
    useEffect(() =>{
        if(token!= ''){
            navigate('/Home')
        }
    },[token])
// método responsável para enviar os dados de login para api na qual irá verificar se é um usuario válido, irá verificar o formulário como um todo quando os dados forem inseridos.
    async function onSubmit(e:ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await login(`/usuarios/logar`, UserLogin, setToken)// Direciona a rota dentro de login
            
            alert('Usuario logado com sucesso!');
        }
        catch(error){
            alert('Dados do usuário divergente.Erro ao logar!')
        }
    }




    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}> {/* quadrante do formulario */}
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h2' align='center' className='texto'>Entrar</Typography>
                        {/* Value captura o valor digitado no campo e o onchange aciona o método UpdateModel */}
                        <TextField value={UserLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuário' label='usuário' variant='outlined' name='usuário' margin='normal' fullWidth></TextField>
                        <TextField value={UserLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth></TextField>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/Home' className='text-decoration' >
                                <Button type='submit' variant='contained' className='botao' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop='{2}'>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' >Não tem uma conta</Typography>
                        </Box>
                        <Link to='/cadastroUsuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='texto'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>


    );
}

export default Login;