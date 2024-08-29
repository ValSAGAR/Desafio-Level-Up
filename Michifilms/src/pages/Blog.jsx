import EntradaComp from "../components/Funtionality/EntradaComp";
import NuevaEntComp from "../components/Funtionality/NuevaEntComp";
import BarraSupComp from "../components/Stylish/BarraSupComp";

const Blog = () => {
    return (
        <>
        <BarraSupComp></BarraSupComp>
        <h1>Blog</h1>
        <h5>Aqui escribe lo que te pasa en tu dia a dia y agregale personalidad con los gifs :3</h5>
        <NuevaEntComp></NuevaEntComp>
        <EntradaComp></EntradaComp>
        </>
    )
}

export default Blog;