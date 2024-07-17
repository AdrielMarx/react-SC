import { Badge, Button, Card, CardBody, CardText, CardTitle, Container } from "react-bootstrap"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { deleteTarefa, getTarefasUsuario } from "../firebase/tarefas"
import { useContext, useEffect, useState } from "react"
import Loader from "../components/Loader"
import toast from "react-hot-toast";
import { UserContext } from "../contexts/UserContext"


function Tarefas() {
  const [tarefas, setTarefas] = useState(null)
  // Recuperamos a informação do usuário (se está ligado ou não)
  const user = useContext(UserContext)

  const navigate = useNavigate()

  function carregarDados() {
    if(user) {
      getTarefasUsuario(user.uid).then((resultados) => {
      setTarefas(resultados)
    })
    }
    // O then está devolvendo a lista de tarefas da coleção
    
  }

  function deletarTarefa(id) {
    // se for true -> vai apagar a tarefa, se for false -> não vai fazer nada
    const deletar = confirm('Tem certeza?')
    if (deletar) {
      deleteTarefa(id).then(() => {
        toast.success('Tarefa excluída com sucesso!')
        // Vai trazer a lista de tarefas de novo, dessa vez sem a tarefa excluida
        carregarDados()
      })
    }
  }

  // Executar uma função quando o componente é renderizado a primeira vez
  useEffect(() => {
    carregarDados()
  }, []) // sintáxe do useEffect pede um array vazio

  // Se o usuário não está logado
  if (user === null) {
    // Navegar para outra página
    return <Navigate to="/login"/>
  }

  const categorias = {
    'Estudos': 'primary',
    'Lazer': 'warning',
    'Trabalho': 'info',
  }

  return (
    <main>
      <Container className="mt-5">
        <h1>Suas tarefas</h1>
        <hr />
        <Link className="btn btn-dark" to="/tarefas/adicionar">Adricionar tarefa</Link>
        {
          tarefas ? <section className="mt-2">
            {
              tarefas.map((tarefa) => {
                return <Card key={tarefa.id}>
                  <CardBody>
                    <CardTitle>{tarefa.titulo}</CardTitle>
                    <CardText>{tarefa.descricao}</CardText>
                    <div>
                      {tarefa.concluido ? <Badge bg='success'>Concluído</Badge> : <Badge bg='danger'>Pendente</Badge>}
                      <Badge>{tarefa.categoria}</Badge>
                    </div>
                    <Button variant={categorias[tarefa.categoria]} onClick={() => {
                      navigate(`/tarefas/editar/${tarefa.id}`)
                    }}>Editar</Button>
                    <Button variant="danger" onClick={() => deletarTarefa(tarefa.id)}>Excluir</Button>
                  </CardBody>
                </Card>
              })
            }
            
          </section> : <Loader />
        }
      </Container>
    </main>
  )
}

export default Tarefas