import { useState, useEffect, createContext } from "react"
import axios from "axios"
const NoticiasContext = createContext()
const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general")
  const [noticias, setNoticias] = useState([])
  const [pagina, setPagina] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(0)
  const [login , setLogin] = useState([])
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios.get(url)
      setNoticias(data.articles)
      setTotalPaginas(Math.ceil(data.totalResults / 20))
    }
    consultarAPI()
  }, [categoria])

  const base64 = {
    encode: (text) => {
      return btoa(text)
    }
  }

  let credencial = {
    user: 'darambulo',
    pass: 1234
  }
  let canales = '49a5f60a-9f56-4feb-bcf1-5377c6152ef8'
  const loginn = async credenciales => {
    const token = 'Basic ' + base64.encode(credencial.user + ':' + credencial.pass)
    const headers = { 'Content-Type': 'application/json' }
    headers.Authorization = token
    headers.Canal = canales
    const requestOptions = {
      method: 'POST',
      headers
    }
    const response = await fetch('http://desa.goitsa.me:8990/goit-notify-api/v1/notCampanas/getCampanaLista', requestOptions)
    const data = await response.json()
    setLogin(data)
  }
  
  loginn(credencial)


  
  
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
      totalPaginas,
      login,
      loginn


      
      }}>
      {children}
    </NoticiasContext.Provider>
  )
}
export {NoticiasContext, NoticiasProvider }
