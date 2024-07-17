import { Badge, Button, Card, CardBody, CardText, CardTitle, Container } from "react-bootstrap"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { deleteTarefa, getTarefas } from "../firebase/tarefas"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import toast from "react-hot-toast";


function Tarefas() {
  const [tarefas, setTarefas] = useState(null)

  const navigate = useNavigate()

  function carregarDados() {
    // O then está devolvendo a lista de tarefas da coleção
    getTarefas().then((resultados) => {
      setTarefas(resultados)
    })
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
                    <Button variant="dark" onClick={() => {
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