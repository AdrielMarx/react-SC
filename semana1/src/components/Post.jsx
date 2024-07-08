import { useState } from 'react'
import './Post.css'

function Post() {

  const [curtida, setCurtida] = useState(false)

  function handleCurtir() {
    setCurtida(!curtida)

  }
  

  return (
    <section className='postagem'>
      <h2 className='tituloPost'>Post</h2>
      <p><img src="https://picsum.photos/200" alt="" /></p>
      <p>Descrição do post</p>
      <button className="botaoCurtir" onClick={handleCurtir}>{
      curtida == false ? 
      <img src="https://cdn2.iconfinder.com/data/icons/matticons-universal-line/32/Basic_Shape_Line_Heart-512.png" alt="Curtir" />
      : <img src="https://cdn1.iconfinder.com/data/icons/app-user-interface-flat/64/like_love_heart_app_user_interface-512.png" alt="Remover Curtida" />} </button>
    </section>
  )
}

export default Post