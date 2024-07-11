import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"

function Cadastro() {
  const {register, handleSubmit, formState: {errors}} = useForm()

  function cadastrar(data) {
    console.log('Cadastro')
    console.log(data)
  }

  return (
    <main>
      <h1>Cadastro</h1>
      <hr />
      <form className="form-section" onSubmit={handleSubmit(cadastrar)}>
        
        <div>
          <label htmlFor="nome">Nome</label>
          <input 
          type="text" 
          id="nome" 
          className="form-control" 
          placeholder="Seu nome"
          {...register('Nome', {required: true, maxLength: 60})}
          />
          {errors.nome && <small className="invalid">Nome inválido</small>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          id="email" 
          className="form-control" 
          placeholder="exemplo@email.com"
          {...register('Email', {required: true})}
          />
          {errors.email && <small className="invalid">Email inválido</small>}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input 
          type="password" 
          id="senha" 
          className="form-control" 
          placeholder="Digite uma senha"
          {...register('Senha', {required: true, minLength: 6})}
          />
          {errors.senha && <small className="invalid">Senha inválida</small>}
        </div>
        <Button variant="dark" className="mt-1 w-100" type="submit">Cadastrar</Button>
        <Button variant="danger" className="mt-1 w-100" type="button">Entrar com o Google</Button>
      </form>
    </main>
  )
}

export default Cadastro