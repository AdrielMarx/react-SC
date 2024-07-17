import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getTarefa, updateTarefa } from "../firebase/tarefas";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function EditarTarefa() {

  // Extrair o ID na rota dinâmica
  const { id } = useParams()

  const user = useContext(UserContext)

  if(user === null ) {
    return <Navigate to="/login"/>
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const navigate = useNavigate();

  function carregarTarefa() {
    getTarefa(id).then((tarefa) => {
      if (tarefa) { // se a tarefa existir
        // preencher o formulário
        reset(tarefa)
      }
      else { // se nao existir -> voltar pra area de tarefas
        navigate('/tarefas')
      }

      console.log(tarefa)
    })
  }

  function atualizarTarefa(data) {
    updateTarefa(id, data).then(() => {
      toast.success('Tarefa atualizada!')
      navigate('/tarefas')
    })
  }

  useEffect(() => {
    carregarTarefa()
  }, [])

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(atualizarTarefa)}>
        <h1>Editar tarefa</h1>
        <hr />
        <div>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            {...register("titulo", { required: true, maxLength: 200 })}
          />
          {errors.titulo && (
            <small className="invalid">O título é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            className="form-control"
            {...register("descricao", { required: true })}
          ></textarea>
          {errors.descricao && (
            <small className="invalid">A descrição é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="dataConclusao">Data</label>
          <input
            type="date"
            id="dataConclusao"
            className="form-control"
            {...register("dataConclusao")}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            id="concluido"
            className="form-check-input"
            {...register("concluido")}
          />
          <label htmlFor="concluido" className="form-check-label">
            Concluído?
          </label>
        </div>
        <div>
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            className="form-select"
            {...register("categoria")}
          >
            <option value="Trabalho">Trabalho</option>
            <option value="Estudo">Estudo</option>
            <option value="Lazer">Lazer</option>
            <option value="Projetos">Projetos</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <Button variant="dark" className="w-100 mt-1" type="submit">
          Atualizar Tarefa
        </Button>
      </form>
    </main>
  );
}

export default EditarTarefa;
