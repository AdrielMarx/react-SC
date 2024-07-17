import { Container, Navbar, Nav, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../firebase/auth"
import toast from "react-hot-toast"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"


// Link: este componente habilita o SPA (Single-Page Application)
// Obs: Se houverem links externos utilize a tag <a></a>



function Menu() {
  const user = useContext(UserContext)
  const navigate = useNavigate()

  function handleLogout() {
    logout().then(() => {
      navigate('/login')
    })
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Link to="/">
          <img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" width="32"/>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
            {user&& <Link className="nav-link" to="/tarefas">Tarefas</Link>}
            {!user && <Link className="nav-link" to="/login">Login</Link>}
            {!user && <Link className="nav-link" to="/cadastro">Cadastro</Link>}
            <Link className="nav-link" to="/ajuda">Ajuda</Link>
            {user && <span className="text-light nav-link">{user.displayName}</span>}
            {user && <Button variant="outline-light" onClick={handleLogout}>
              Sair
            </Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Menu