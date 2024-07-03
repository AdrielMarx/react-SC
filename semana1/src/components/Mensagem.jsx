// Importante importar para que os estilos do arquivo façam parte do projeto
import "./Mensagem.css";

function Mensagem(props) {
    return (
        <article className="postagem">
            <h3>{props.textotitulo}</h3>
            <p>{props.paragrafo}</p>
            <img src={props.linkImagem} alt="imagem aleatória" />
            <small>Criado por: {props.nomeAutor}</small>
        </article>
    )
}

export default Mensagem