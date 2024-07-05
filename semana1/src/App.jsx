// jsx => JavaScript extended
// Vai permitir escrever código "html" dentro do js

import Rodape from "./components/Rodape";
import Blog from "./components/Blog";
import Mensagem from "./components/Mensagem";
import Navbar from "./components/Navbar";
import CardAluno from "./components/CardAluno";
import Products from "./components/Products";
import Listagem from "./components/Listagem";
import Banner from "./components/Banner";


// Fragment: <>
// Utilizamos o fragmente para agrupar elementos filhos

function App() {
    return (
        <>
            {/* <CardAluno nomeAluno = 'João Marcos'
            serieAluno = '7º ano'
            mediaAluno = '6'
            />
            <Products desconto = {70}
            nomeProduto = 'Incrivel playstaixoooooon faive muito baratinho' 
            precoOriginal = {5000} */}
            {/* /> */}
            {/* <Listagem /> */}
            <Banner />
        </>
    )
}

export default App;