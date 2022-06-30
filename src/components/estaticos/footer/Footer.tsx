import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid, TextField } from '@material-ui/core';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
      
      // Componente que oculta o footer da pagina inicial e fica disponível somente se for mudado o status do token
      var footerComponent;
   
      if(token != ''){ 

        footerComponent=
        <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
        <Box className='box1'>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom >Siga nas redes sociais </Typography>
                </Box>

                

                <Box display="flex" alignItems="center" justifyContent="center" >
                    
                    <a href="https://www.facebook.com/generationbrasil" target="_blank">
                        <FacebookIcon className='redes' />
                    </a>
                    <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                        <InstagramIcon className='redes' />
                    </a>
                    <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                        <LinkedInIcon className='redes' />
                    </a>
               
                    
                    
                    </Box>
                      
            </Box>
        </Grid>
    </Grid>
      }
    return (
        <>
          {footerComponent}
        </>
    )
}

export default Footer;