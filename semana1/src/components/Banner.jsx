import './Banner.css' 
import imagem from '../assets/banner.jpg'

function Banner () {
  return (
    <section>
      <img src={imagem} alt="banner" width={240} />
      <br />
      <img src="/vite.svg" alt="Logo do vite" />
      <img src="/banner.jpg" alt="imagem aleatoria" />
      <button>Clique Aqui</button>
    </section>
  )
}

export default Banner