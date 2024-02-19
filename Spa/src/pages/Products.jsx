import products from "../database.json"
export default function Products() {
  return (
    <section>
      <h2>Todos os produtos</h2>
      <p>Confira todas as nossas ofertas.</p>
      <section className="products">
        <h3>Produtos</h3>
        <ul>
       {products.map((products) => (
         <li key={products.id}>
            <h4>{products.name}</h4>
            <p>R$ {products.price}</p>
            <button>Ver</button>
            <button>Comprar</button>
         </li>
       ))} 
          
        </ul>
      </section>
    </section>
  );
}
