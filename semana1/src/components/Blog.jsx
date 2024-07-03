import "./Blog.css"
import Postagem from "./Postagem"

function Blog () {
    return (
    <section className="blog">
        <h2>Postagens do dia</h2>
        <Postagem titulo= 'React é muito bom' desc = 'Descrição da postagem' linkImagem = 'https://picsum.photos/200'/>
        <Postagem titulo = 'Html é top' desc = 'descrição da segunda postagem' linkImagem = 'https://picsum.photos/200' />
        <Postagem titulo = 'Js é brabo' desc = 'descrição da terceira postagem' linkImagem = 'https://picsum.photos/200' />
    </section>
    )
}

export default Blog;