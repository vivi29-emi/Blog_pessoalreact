import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent,Grid} from "@material-ui/core"
import './DeletarPostagem.css';
import { useNavigate, useParams } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function DeletarPostagem() {
let navigate = useNavigate();
const { id } = useParams <{id:string}>();
const token = useSelector<TokenState, TokenState["tokens"]>(
  (state) => state.tokens
);
const [post,setPosts] = useState<Postagem>()

useEffect(()=>{
  if(token == ''){

    toast.error('Você precisa estar logado',{
      position:"top-right",
      autoClose:2000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:false,
      draggable:false,
      theme:'colored',
      progress:undefined,
  })
  
    
    navigate('/login')
  }
},[token])

useEffect(()=>{
    if(id != undefined){
      findById(id)
    }
},[id])

async function findById(id:string){
  buscaId(`/postagens/${id}`, setPosts, {
    headers:{
      'Authorization':token
    }
  });

  toast.success('Postagem deletado com sucesso',{
    position:"top-right",
    autoClose:2000,
    hideProgressBar:false,
    closeOnClick:true,
    pauseOnHover:false,
    draggable:false,
    theme:'colored',
    progress:undefined,
});
  
}


function sim(){
  navigate('/posts')
  deleteId(`/postagens/${id}`,{
  headers:{
    'Authorization':token

  }
 });
 toast.success('Postagem deletada com sucesso !',{
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

function nao (){
  navigate('/posts')
}

  return (
    <>
    <Grid container className='primGd'>
      <Box m={2}  >
        <Card variant="outlined" className='card_delet'>
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
              {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="btnDel" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button  onClick={nao} variant="contained" size='large' color="secondary" className='btnAtual'>
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
export default DeletarPostagem;