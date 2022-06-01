import React,{useState,useEffect,ChangeEvent} from 'react'
import {Grid, Typography, Box, TextField,Button,} from '@material-ui/core';
import {Link,useNavigate} from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css';
import { userInfo } from 'os';


function CadastroUsuario() {

  let navigate = useNavigate();
  const [confirmarSenha,setConfirmarSenha]= useState<String>('')
  const [usuario,setUsuario] = useState <Usuario>(
    {
    id:      0,
    nome:    '',
    usuario: '',
    senha:   '',
    foto:    ''
    }
  )
  const [usuarioResult, setUsuarioResult]= useState<Usuario>(
    {
      id:      0,
    nome:    '',
    usuario: '',
    senha:   '',
    foto:    ''
    }
  )
  useEffect(()=>{
    if(usuarioResult.id!=0){
      navigate('login')
    }
  },[usuarioResult])

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
    setConfirmarSenha(e.target.value)
  }
  function updatedModel(e: ChangeEvent<HTMLInputElement>){
    setUsuario({
      ...usuario,
      [e.target.name]:e.target.value
    })
  }

  async function onSubmit(e:ChangeEvent<HTMLFormElement>){
    e.preventDefault()
      // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
    if(confirmarSenha === usuario.senha && usuario.senha.length >= 8){
       //Tenta executar o cadast
      try{
        cadastroUsuario(`/usuario/cadastrar`,usuario,setUsuarioResult)
        
        alert('Usuario cadastrado com sucesso')
        //Se houver erro, pegue o Erro e retorna uma msg
      }catch(error){
        console.log(`Error: ${error}`)
                
         
        alert("Usuário já existente")
      }
    }else{
      alert('Insira no miníno 8 caracteres na senha!')

      setUsuario({...usuario,senha:''})// Reinicia o campo de Senha
      setConfirmarSenha('')   // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
    <Grid container direction='row' justifyContent='center' alignItems='center' >
    
    <Grid item xs={6} className='imagem2'></Grid>
    <Grid item xs={6} alignItems='center'>
      <Box paddingX={10}>
        <form>
          <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto2'>Cadastro</Typography>
          <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={usuario.nome}
                            id='nome'
                            label='nome'
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            fullWidth required />

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={usuario.usuario}
                            type="email"
                            id='usuario'
                            label='usuario'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth required />

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={usuario.foto}
                            id='foto'
                            label='foto'
                            variant='outlined'
                            name='foto'
                            margin='normal'
                            fullWidth />

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={usuario.senha}
                            id='senha'
                            label='senha'
                            variant='outlined'
                            name='senha'
                            margin='normal' type='password'
                            fullWidth required />

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            value={confirmarSenha}
                            id='confirmarSenha'
                            label='confirmarSenha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal' type='password'
                            fullWidth required />

          {/* Box estilização dos botões */}
          <Box marginTop={2} textAlign='center'>
            <Link to='/login' className='text-decorator-none'>
            <Button type='submit' variant='contained' color='secondary'className='btnCadastrar'>
              Cadastrar
            </Button>
            <Button variant='contained' color='primary' className='btnCancelar'>
              Cancelar
            </Button>
            </Link>
          </Box>
        </form>
      </Box>
    </Grid>
    
    </Grid>

    </>
  );
}

export default CadastroUsuario;