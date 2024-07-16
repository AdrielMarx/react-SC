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
// BrowserRouter é o componente essencial para conduzir o roteamento no navegador
// Route: indicamos a rota (route) e o elemento que será exibido na tela

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/tarefas" element={<Tarefas />}/>
          <Route path="/ajuda" element={<Ajuda />}/>
          <Route path="/tarefas/adicionar" element={<NovaTarefa />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" /> 
    </>
  )
}

export default App