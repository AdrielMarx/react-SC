import Menu from "./components/Menu"
import Ajuda from "./pages/Ajuda"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NovaTarefa from "./pages/NovaTarefa"
import Tarefas from "./pages/Tarefas"
import { Toaster } from "react-hot-toast"
import EditarTarefa from "./pages/EditarTarefa"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/config"
import { UserContext } from "./contexts/UserContext"
// BrowserRouter é o componente essencial para conduzir o roteamento no navegador
// Route: indicamos a rota (route) e o elemento que será exibido na tela

function App() {
  // O estado de usuário indica se ele está logado ou não na aplicação
  // null = deslogado
  const [ usuarioLogado, setUsuarioLogado ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    // Monitora/Detecta o usuário conectado/desconectado
    onAuthStateChanged(auth, (user) => {
      // se user === nulo -> usuário deslogou
      // se user contem bojeto -> usuário logado
      setUsuarioLogado(user)
      setLoading(false)
    })
  }, [])

  if(loading) {
    // Este elemento será exibido enquanto a aplicação estiver sendo carregada, ou seja nao vai exibir nada porque ta null ne familia
    return null
  }
  // user.provider é o elemento qeu irá compartilhar um valor/dado para os componentes filhos da aplicação
  return (
    <>
      <UserContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/tarefas" element={<Tarefas />}/>
            <Route path="/ajuda" element={<Ajuda />}/>
            <Route path="/tarefas/adicionar" element={<NovaTarefa />}/>
            <Route path="/tarefas/editar/:id" element={<EditarTarefa />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
        <Toaster position="bottom-right" />
      </UserContext.Provider>
    </>
  )
}

export default App