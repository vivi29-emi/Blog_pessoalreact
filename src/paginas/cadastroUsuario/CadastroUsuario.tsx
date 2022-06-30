import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './CadastroUsuario.css';
import { useDispatch } from 'react-redux';

function CadastroUsuario() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        // Estrutura Condicional que verifica se as senhas batem e se a Senha é igual a 8 caracteres
        if (confirmarSenha === user.senha && user.senha.length === 8) {

            //Tenta executar o cadastro
            try {

                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Usuário cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });


                //Se houver erro, pegue o Erro e retorna uma msg
            } catch (error) {
                console.log(`Error: ${error}`)

                
                toast.error('Dados incorretos, verifique os dados inseridos', {
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

            

        } else {

            toast.error(' A senha tem que ter 8 caracter', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

            setUser({ ...user, senha: "" }) // Reinicia o campo de Senha
            setConfirmarSenha("")           // Reinicia o campo de Confirmar Senha
        }
    }

    return (


        <Grid className='containPric'container direction='row' justifyContent='center' alignItems='center'>
        <Grid item xs={6} className='imgPrinc'></Grid>
        <Grid item xs={6} alignItems='center'>
            <Box paddingX={10}>
                <form onSubmit={onSubmit}>
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                    <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome'placeholder='Digite o nome completo' variant='outlined' name='nome' margin='normal'className='cxInput' fullWidth />
                    <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='foto' label='foto' placeholder='Link da foto'variant='outlined' name='foto' margin='normal'className='cxInput'fullWidth />
                    <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal'className='cxInput'fullWidth />
                    <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='senha' label='senha'placeholder=' A senha tem que ter 8 caracter' variant='outlined' name='senha' margin='normal' type='password' className='cxInput'fullWidth />
                    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' className='cxInput' fullWidth />
                    <Box marginTop={2} textAlign='center'>
                    <Button type='submit' variant='contained' color='primary'className='btnCadastrar'>
                                Cadastrar
                        </Button>
                        <Link to='/login' className='text-decorator-none'>
                            <Button variant='contained' color='secondary' className='btnCancelar'>
                                Cancelar
                            </Button>
                        </Link>
                      </Box>
                </form>
            </Box>
        </Grid>



    </Grid>
    );
}

export default CadastroUsuario;