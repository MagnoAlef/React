import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout(){
    return(
        <>
        <Header/>
        <main>
            <p>Esse e o layout principal,abaixo esta o conteudo dinamico de cada rota.</p>
            <hr />
            <Outlet/> {/**  colocar os filhos nessa região as outras rotas definidas*/}
            <footer>Feito com React Router DOM</footer>
        </main>
        </>
    )
}