import React, { useState, ChangeEvent, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import { addToken } from '../../store/tokens/actions';
import { useDispatch } from 'react-redux';
import UserLogin from '../../models/UserLogin';
import { toast } from 'react-toastify';
import './Login.css';


function Login() {

    let navigate = useNavigate();//função utilizada para controlar a navegação da pessoa usuária dentro do site.
    const dispatch = useDispatch();
    const [token, setToken] = useState('');// processo que faz o controle do token dentro do localStorage.
    // Inicializando um estado o componete por meio do UseState.
    const [userLogin, setUserLogin] = useState<UserLogin>(//useState componente dos hooks responsável por fazer o controle de um componente desde a inicialização e a redenrização adicionando um estado a um componete funcional
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
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value // Toda vez que o usuario acessar uma das propriedades dentro do campo textfild essa método será acionado, e depois atribuido os valores que estão fora dos colchetes
        })
    }
    //Executa funções sempre que uma de sua variáveis de dependência sofrer uma alteração
    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token));
            navigate('/home')
        }
    }, [token])
    // método responsável para enviar os dados de login para api na qual irá verificar se é um usuario válido, irá verificar o formulário como um todo quando os dados forem inseridos.
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)// Direciona a rota dentro de login

            toast.success('Usuário cadastrado com sucesso ', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        catch (error) {

            toast.error('Dados do usuário divergente.Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

        }
    }




    return (

        <Grid container className="gridPrinc">
            <Grid item xs={12}>


                <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
                    <Box className="cxLogin" width={400} height="45vh" borderRadius={4}

                        marginTop={12} display="flex" justifyContent="center" alignItems="center">


                        <form onSubmit={onSubmit} className='.cxLogin' >
                            <Typography variant='h4' gutterBottom color='textPrimary' component='h4' align='center' className='texto'>Entrar</Typography>
                            {/* Value captura o valor digitado no campo e o onchange aciona o método UpdateModel */}
                            <TextField placeholder='Digite o seu e-mail' className='input' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField placeholder='Digite o sua senha' className='input' value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth />

                            <Box marginTop={4}>
                            <Typography variant='subtitle1' gutterBottom align='center'className='texto' >Não tem uma conta ?</Typography>
                            <Link to='/cadastroUsuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='texto1'>Cadastre-se</Typography>
                        </Link>
                        </Box>
                            <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' className='btnLogin' color='primary'>
                                    Login
                                </Button>
                            </Box>

                           
                        </form>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>



            </Grid>
        </Grid>


    );
}

export default Login;