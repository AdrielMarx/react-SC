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
import Eventos from "./components/Eventos";
import Contador from "./components/Contador";
import Abas from "./components/Abas";
import Carrossel from "./components/Carrossel";
import Calculadoraimc from "./components/Caulculadoraimc";
import Post from "./components/Post";
import ConversorTemperatura from "./components/ConversorTemperatura";


// Fragment: <>
// Utilizamos o fragmente para agrupar elementos filhos

function App() {
    return (
        <>
        <Post />
        <Post />
        <ConversorTemperatura />
        </>
    )
}

export default App;