import { Badge, Button, Card, CardBody, CardText, CardTitle, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { getTarefas } from "../firebase/tarefas"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"


function Tarefas() {
  const [tarefas, setTarefas] = useState(null)

  function carregarDados() {
    // O then está devolvendo a lista de tarefas da coleção
    getTarefas().then((resultados) => {
      setTarefas(resultados)
    })
  }

  // Executar uma função quando o componente é renderizado a primeira vez
  useEffect(() => {
    carregarDados()
  }, []) // sintáxe do useEffect pede um array vazio

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
                    <Button variant="dark">Editar</Button>
                    <Button variant="danger">Excluir</Button>
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