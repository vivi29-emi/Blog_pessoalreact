import React, { ChangeEvent, useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography,Grid} from '@material-ui/core';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {toast} from 'react-toastify';


function DeletarTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id:string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [tema, setTema] = useState<Tema>()

  useEffect(()=> {
    if (token == ''){
      alert ('Você precisa estar logado')
      navigate('/login')
    }
  },[token])
  
  useEffect(()=> {
    if(id!= undefined){
      findById(id)
    }
  },[id])

  async function findById(id:string){
    buscaId(`/tema/${id}`,setTema ,{
      headers:{
        'Authorization':token
      }
    })
  }

  function sim() {
    navigate('/temas')

    try {
        deleteId(`/temas/${id}`, {
            headers: {
                'Authorization': token
            }
        });

        toast.success('Tema deletado com sucesso',{
          position:"top-right",
          autoClose:2000,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:false,
          draggable:false,
          theme:'colored',
          progress:undefined,
        })
        
        
    } catch (error) {

      toast.error('Erro ao deletar tema',{
        position:"top-right",
        autoClose:2000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:false,
        draggable:false,
        theme:'colored',
        progress:undefined,
      })
    }

}
 function nao (){
   navigate('/temas')
 }

 
          
  return (
    <>
    <Grid container className='primGd'>
      <Box m={2}>
        <Card variant="outlined" className='card_delet'>
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="btnDel"  size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' color="secondary" className='btnAtual'>
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
      </Grid>
    </>
  );
}
export default DeletarTema;