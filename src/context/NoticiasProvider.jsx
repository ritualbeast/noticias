import { useState, useEffect, createContext } from "react"
import axios from "axios"
const NoticiasContext = createContext()
const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general")
  const [noticias, setNoticias] = useState([])
  const [pagina, setPagina] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(0)
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios.get(url)
      setNoticias(data.articles)
      setTotalPaginas(Math.ceil(data.totalResults / 20))
    }
    consultarAPI()
  }, [categoria])
  
  
  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value)
  }
  return (
    <NoticiasContext.Provider 
    value={{ 
      categoria,
      handleChangeCategoria,
      noticias,
      pagina,
      setPagina,
      totalPaginas
      
      }}>
      {children}
    </NoticiasContext.Provider>
  )
}
export {NoticiasContext, NoticiasProvider }
