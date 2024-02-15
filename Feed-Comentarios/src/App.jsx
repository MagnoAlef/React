import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState();
  const [comentario, setComentario] = useState();
  const [secaoComentario, setSecaoComentario] = useState([]);

  const addComentario = ({ email, comentario }) => {
    const id = Math.floor(Math.random() * 10000000);
    const novoComentarios = { id, email, comentario };

    setSecaoComentario((Comentarios) => [...Comentarios, novoComentarios]);

    return id;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addComentario({ email, comentario });
  };
  return (
    <>
      <div>
        <h1>Seção de comentarios</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p></p>
          <label htmlFor="comentario">Comentario</label>
          <br />
          <input // textarea 
            type="text"
            name="comentario"
            id="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
          <p></p>
          <button type="submit">Enviar Comentario</button>
        </form>
      </div>
      <div>
        {secaoComentario.map((comentario) => (
          <div key={comentario.id}>
            <h3>Email</h3>
            <span>{comentario.email}</span>
            <h3>Comentario</h3>
            <span>{comentario.comentario}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
