import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import {Link,useNavigate} from 'react-router-dom';
import './Navbar.css';
import useLocalStorage from 'react-use-localstorage';


function Navbar (){
    let navigate = useNavigate();
    const [token,setToken] = useLocalStorage(`token`);
    
    function goLogout(){
        setToken(``)
        alert('Usuario Deslogado')
        navigate('/login')   
    }
    
    return(
        <>
        {/* AppBar exibe os widgets da barra de ferramentas, levando , título e ações , acima da parte inferior */}
            
            <AppBar position="static" className='cor-menu'>
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
            
        </>
    )
}

export default Navbar;