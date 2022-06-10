import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import {Link,useNavigate} from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';


function Navbar (){
    

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
   
    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado',{
            position:"top-right",
            autoClose:2000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:false,
            draggable:false,
            theme:'colored',
            progress:undefined,
        });
        navigate('/login')
    }
 // Componente que oculta o navbar da pagina inicial e fica disponível somente se for mudado o status do token
    var navbarComponent;

    if(token != ''){

        navbarComponent =  <AppBar position="static" className='cor-menu'>{/* AppBar exibe os widgets da barra de ferramentas, levando , título e ações , acima da parte inferior */}
          <Toolbar variant="dense" >
              
              <Box className='cursor' >
                  {/* Typography é uma tag que recebe elementos textos */}
                  <Typography variant="h5" color="inherit" >
                      GrowCrops
                  </Typography>
              </Box>
              
       
              <Box display="flex" justifyContent="start">
              <Link to='/home' className='text-decorator-none'>
                  <Box mx={1} className='cursor'>
                      <Typography variant="h6" color="inherit">
                          Home
                      </Typography>
                  </Box>
                  </Link>
                  <Link to='/posts' className='text-decorator-none'>
                  <Box mx={1} className='cursor' >
                      <Typography variant="h6" color="inherit">
                          Postagens
                      </Typography>
                  </Box>
                  </Link>
                  <Link to='/temas'className='text-decorator-none'>
                  <Box mx={1} className='cursor' >
                      <Typography variant="h6" color="inherit">
                          Temas
                      </Typography>
                  </Box>
                  </Link>
                  <Link to='/formularioTema'className='text-decorator-none'>
                  <Box mx={1} className='cursor'>
                      <Typography variant="h6" color="inherit">
                          Definir tema
                      </Typography>
                  </Box>
                  </Link>
                  
                  <Box mx={1} className='cursor' onClick={goLogout}>
                      <Typography variant="h6" color="inherit">
                          Logout
                      </Typography>
                  </Box>
                  
              </Box>

          </Toolbar>
      </AppBar>
    }
    
    return(
        <>

        {navbarComponent}
        </>
    )
}

export default Navbar;