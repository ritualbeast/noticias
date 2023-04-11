import { Card } from "@mui/material"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

const Noticia = ({noticia}) => {
    const {urlToImage, url, title, description, source, content} = noticia  
 
 
    return (
        <Grid 
        item xs={12} md={6} lg={4} >
            <Card sx={{ maxWidth: 345 }}
            
        
        >
            {urlToImage ? (
          <CardMedia component="img" height="140" image={urlToImage} alt={title} />
        ) : (
          <CardMedia component="video" height="140" poster={urlToImage}>
            <source src={url} type="video/mp4" 
             /> 
            Tu navegador no admite la reproducción de videos HTML5.
          </CardMedia>
        )}
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
            <Typography variant="body2" color="text.primary">
                {source.name}
            </Typography>
            </CardContent>
            <CardActions 
            sx={{justifyContent: 'center'}}
            
            
            >
                <Link
                    href={url}
                    target='_blank'
                    variant="button"
                    color="text.primary"
                    underline='hover'

                >
                    Leer mas

                </Link>
                
                </CardActions>
            /</Card>
            </Grid>
        
            
  )
}

export default Noticia
