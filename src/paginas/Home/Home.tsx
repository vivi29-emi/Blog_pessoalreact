import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';

import './Home.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'; 

function Home() {

    let Navigate = useNavigate ();
    // O useSelector tem acesso ao store onde fica harmazenado o token ou demais componentes para depois atribuir a variavel o valor inicial.
    const token = useSelector <TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );
   
    
    useEffect(() => {
      if (token == "") {

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
         
          Navigate("/login")
  
      }
  }, [token])
    return (
        <>

            <Grid container className="primGrid">
            <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-start" alignItems="center" height="80vh">
            <Box className="cxText" width={650} height="50vh" borderRadius={4} >
            <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className='tituloSobre'> Porque GrowCrops</Typography>
            <Typography variant="body2" component="p" className='txtSobre'>  
            GrowCrops é uma palavra em inglês que significa CULTIVAR, sendo assim, 
            usar esse nome da para entender a importância de cultivar aquilo que vai agregar algo de bom.
            Como o nome se relaciona com os cactos? Estudando sobre os cactos percebi que essa incrível planta e suas diversidades tem muito a ensinar a sociedade e no blog será explorado esses detalhes.
                            </Typography>
            <Typography variant="body2" component="p" className='txt2' > *Para saber mais sobre a plataforma e futuras implementações só clickar abaixo.</Typography>
                            
                            


            <Link to={`/sobre`} className="text-decorator-none" >
                    <Box mx={1} >
                      <Button variant="contained" className="btnsobre" size='small'>
                        Sobre
                      </Button>
                    </Box>
                  </Link>

            </Box>
            </Box>
                    
                
                

            </Grid>
            </Grid>

    
    
          
        


                   

                
                   
                   
            
                
        
        </>
    );
}

export default Home;