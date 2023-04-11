import { FormControl, InputLabel, Select, MenuItem, Button, Box } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import { useState } from "react"
const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]



const Formulario = () => {
    const {categoria, handleChangeCategoria} = useNoticias()
    const [noticias, setNoticias] = useState([])
 return (
    <form>
        <FormControl fullWidth 
        >
            <InputLabel> 
                Categoria
            </InputLabel>
            <Select  
             
            label='Categoria'
            onChange={handleChangeCategoria}
            value={categoria}
             >
                {CATEGORIAS.map(categoria =>(
                   <MenuItem 
                    key={categoria.value}
                    value= {categoria.value}
                   >
                    {categoria.label}
                   </MenuItem> 
                )
                    )}

            </Select>
            
        </FormControl>

    </form>
  )
}

export default Formulario
