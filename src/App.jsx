import { Container, Grid, List, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import { NoticiasProvider } from './context/NoticiasProvider';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
 
  return (
    <NoticiasProvider>
      <Container >
        
        <header>
            <Typography align='center' marginY= {5} variant='h3'>
              Buscador de noticias

            </Typography>
        </header>
        <Grid 
          container
          direction='row'
          justifyContent='center'
          alignItems='center' >
          <Grid item xs={12} md={6} >
            
          </Grid>
        </Grid>
        < Formulario></Formulario>
        <ListadoNoticias></ListadoNoticias>
      </Container>
        </NoticiasProvider>
    
  )
}

export default App
