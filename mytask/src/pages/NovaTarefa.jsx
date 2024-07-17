import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { addTarefa } from "../firebase/tarefas"
import toast from "react-hot-toast"
import { Navigate, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function NovaTarefa() {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const navigate = useNavigate()

  const user = useContext(UserContext)

  if (user === null) {
    return <Navigate to="/login"/>
  }

  function salvarTarefa(data) {
    // Novo campo do documento que associa o usuário e tarefa que ele criou
    data.idUsuario = user.uid
    addTarefa(data)
    .then(() => {
      // then aguarda a inserção da tarefa para ENTAO exibir o toast
      toast.success('Tarefa adicionada com sucesso!')
      // redirecionar o usuário para /tarefas
      navigate('/tarefas')
    }).catch(() => {
      toast.error('Erro inesperado ao adicionar tarefa.')
    })
  }


  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(salvarTarefa)}>
        <h1>Adicionar tarefa</h1>
        <hr />
        <div>
          <label htmlFor="titulo">Titulo</label>
          <input type="text" 
          id="titulo" 
          className="form-control" 
          {...register('titulo', {required: true, maxLength: 50})}
          />
          {errors.titulo && <small className="invalid">Título inválido</small>}
        </div>
        <div>
          <label htmlFor="descricao">Descricao</label>
          <textarea id="descricao" 
          className="form-control"
          {...register('descricao', {required: true})}
          ></textarea>
          {errors.descricao && <small className="invalid">Descrição inválida</small>}
        </div>
        <div>
          <label htmlFor="data">Data de Conclusão</label>
          <input type="date" 
          id="dataConclusao" 
          className="form-control" 
          {...register('dataConclusao')}
          />
      </div>
        <div className="form-check">
          <input type="checkbox" 
          id="concluido" 
          className="form-check-input"
          {...register('checkbox')}
          />
          <label htmlFor="concluido" className="form-check-label">Concluído?</label>
        </div>
        <div>
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" 
          className="form-select"
          {...register('categoria')}
          >
            <option value="Trabalho">Trabalho</option>
            <option value="Estudo">Estudo</option>
            <option value="Lazer">Lazer</option>
            <option value="Projetos">Projetos</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <Button variant="dark" className="w-100 mt-1" type="submite">Salvar Tarefa</Button>
      </form>
    </main>
  )
}

export default NovaTarefa