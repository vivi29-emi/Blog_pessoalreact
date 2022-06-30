import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Postagem from '../../../models/Postagem';
import { busca, put } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography,Grid } from '@material-ui/core';
import './ListaPostagem.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';




function ListaPostagem() {

  const [posts, setPosts] = useState<Postagem[]>([])

  const [post, setPost] = useState<Postagem>({

    id: 0,
    titulo: '',
    texto: '',
    curtir: 0,
    data: '',
    midia: '',
    tema: null

  })


  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login")

    }
  }, [token])

  async function curtidas(id: number) {
    await put(`/postagens/curtir/${id}`, post, setPost, {
      headers: {
        'Authorization': token
      }
    }
    );

    getPost()
  }




  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (

   
    <>

<Grid container className='primGd'>
      {
    

        
        posts.map(post => (

          

          <Box m={2}>

            <Card variant="outlined" className='cards'>
              <Box>
                <img src={post.midia} alt="" className='imgPostagem' />
              </Box>

              <Box>
                
                <Button onClick={() => { curtidas(post.id) }} ><ThumbUpIcon color='action'></ThumbUpIcon></Button>
                <Typography style={{ color: 'black' }} align='center' variant="body2" component="p"> {post.curtir}</Typography>

                </Box>

              <CardContent>

                <Typography variant="body2" component="p" className='cxTitulo'>
                  {post.titulo}
                </Typography>

                <Typography variant="body2" component="p" className='cxDescr'>
                  {post.tema?.descricao}
                </Typography>

                <Typography variant="body2" component="p" className='cxTexto'>
                  {post.texto}
                </Typography>

              </CardContent>
              <CardActions>
                <Box>
                  
                  <Box mx={1}display="flex" justifyContent="center" alignItems='center' mb={1.5} className='btncard'>

                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                      <Button variant="contained" className="btnAtual" size='small' >
                        Atualizar
                      </Button>
                    </Link>
                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                      <Button variant="contained" className='btnDel' size='small' >
                        Deletar
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Box>

          
        ))
        
      }

       </Grid>

    </>
  
  )
}

export default ListaPostagem;