import { Grid, Typography } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"
import Pagination from '@mui/material/Pagination';
import Stack from "@mui/material/Stack";
const ListadoNoticias = () => {
  const {noticias, totalPaginas, login} = useNoticias()
  console.log(totalPaginas)
  const totalNoticias =  totalPaginas / 20
  
  console.log(login)
  
  return (
    <>
      <Typography
      textAlign='center' 
      align='center' 
      marginY= {5} 
      variant='h3'>
        Listado de noticias
      </Typography>
      <Grid>
        
      </Grid>
      <Grid
      container
      spacing={2}
      >
        {noticias.map(noticia => (
          <Noticia
          key={noticia.url}
          noticia={noticia}
          />
        ))}
      </Grid>
      <Stack 
      spacing={2} 
      direction="row"
      justifyContent="center"
      alignItems="center"
      marginY={10}


      >
        <Pagination count={10} color="primary" />
      </Stack>
      
    </>
  )
}

export default ListadoNoticias
