import { Link, useLoaderData } from "react-router-dom";
export default function Products() {
const product = useLoaderData()
  
  //throw new Error("Error qualquer")
  return (
    <section>
      <Link to="/products">
        <button>voltar</button>
      </Link>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.price}</p>
      <button>Comprar</button>
    </section>
  );
}
