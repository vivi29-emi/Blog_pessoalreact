import React from 'react'
import './Sobre.css'
import { Grid,Typography,Box} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function Sobre() {
    let history = useNavigate();

    function contatoEnviar() {

        toast.success('Mensagem Enviada!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",

        });
        history('/home')
    }

    return (
        <>

<Grid container direction="row" justifyContent="center" alignItems="center" className='containerPrim'>
                <Grid alignItems="center" item xs={4}>
                    <Box paddingX={20} >
                    <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className='titulo'> Objetivo da Plataforma</Typography>
                    <Typography variant="body2" component="p" className='txt'>  Essa plataforma tem com objetivo compartilhar as minhas ídeias sobre como podemos cultivar aquilo que nos cativa aprendendo com os cactos. Futuramente será implementado para os usuários poderem comentar suas opiniões sobre as postagens.</Typography>
                    <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className='titulo'> Futuras implementações</Typography>   
                    <Typography variant="body2" component="p" className='txt'> 
                    <ul>
                        <li>Listar por titulo.</li>
                        <li>Separar a camada de usuário do administrador.</li>
                        <li>Responsividade.</li>
                        <li>Listar postagem por descrição de temas.</li>
                        <li>Criar camada Perfil.</li>
                    </ul>
                    </Typography>
                    </Box>
                   
                </Grid>
                <Grid item xs={6} >
                    
                    <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className='titulo'> Desenvolvedora</Typography>
                <Typography variant="body2" component="p" className='txt'>
                            "Não nasci apaixonada pela tecnologia, aos poucou fui me familiarizando com ela.
                            Quando comecei a estudar programação pude ver quantas coisas incríveis podemos fazer com ela e alcançar.
                            Atualmente fico muito orgulhosa de ter desenvolvido do zero essa rede social com ajuda da escola Generation e por meio dessa plataforma, poder agregar valores e conhecimento com aqueles na qual se interessarem pelo assunto".
                </Typography>
                <Box className='imgfoto'>
                    <img src="https://i.imgur.com/6Ihb0gP.png" alt="" width="200px" height="260px"  />
                    </Box>
                </Grid>
                
            </Grid>
        </>
            
        
        
        
    )
}


export default Sobre

