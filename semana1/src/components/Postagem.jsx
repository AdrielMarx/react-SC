import "./Postagem.css"

// Props são os atributos que definimos no uso do Postagem
function Postagem (props) {
    console.log(props)
    return (
        <article className="postagem">
            <h3>{props.titulo}</h3>
            <p>{props.desc}</p>
            <img src={props.linkImagem} alt="imagem aleatória" />
        </article>
    )
}

export default Postagem;