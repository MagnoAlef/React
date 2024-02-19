import { Link } from "react-router-dom"

export default function Header(){
    return(
        <section>
            <header>
                <nav style={{display:'flex' , gap:'2rem'}}>
                    <Link to='/'>Inicio</Link>
                    <Link to='/products'>Produtos</Link>
                    <Link to='/cart'>Cart</Link>
                </nav>
            </header>
        </section>
    )
}