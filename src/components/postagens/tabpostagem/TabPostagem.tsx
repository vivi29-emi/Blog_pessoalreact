import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';

import './TabPostagem.css';
import ListaPostagem from '../listapostagem/ListaPostagem';



function TabPostagem() {

    
    const [value, setValue] = useState('1')// UseState capturando os valores do painel 1 e 2
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){ //handleChange= Manipula alteração que osorre dentro do painel,newValue= parametro responsável para harmazenar o click efetuado no valor 1 ou 2
        setValue(newValue); // Captura o valor  da newValue e atribui no useState, modificando o valor da variavel  value.
    }
  return (
    <>
      <TabContext value={value}> 
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange} className='caixatabs'>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem/>
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ut eveniet natus totam et, voluptate dicta tempore alias, odio nobis non eius cupiditate minima inventore pariatur! Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit consequuntur suscipit fugiat, nam quis quod quaerat veritatis et, vel ratione beatae, facere neque! Quo animi porro voluptate saepe deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci, officia aut quidem dolorum deserunt iure dolorem doloribus velit nobis quas consequatur at ullam odit, nesciunt est nulla nihil excepturi!</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;