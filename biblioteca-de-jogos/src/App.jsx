import { useState } from "react";

function App() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem('obc-game-lib')
    if(!storedGames) return []
    const gameArray = JSON.parse(storedGames)
    return gameArray

  })
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

const addGame = ({title,cover}) => {
  const id = Math.floor(Math.random() * 10000000)
  const game = { id,title,cover}

  setGames(state =>{
   const newState =  [...state, game]
    localStorage.setItem('obc-game-lib' , JSON.stringify(newState))
    return newState
  } ) // Ele pegou ja todos os elementos que estão no array mais os novos criados
}


const removeGame = (id) => {
 setGames(state =>{
const newState = state.filter(game => game.id !== id)
localStorage.setItem('obc-game-lib' , JSON.stringify(newState))
return newState
 } )
}

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({title,cover})
    setTitle('')
    setCover('')
  };

  return (
    <>
      <div id="app">
        <h1>biblioteca de jogos</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Titulo:</label>
            <input
             type="text"
              name="title"
               id="title"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               />
          </div>
          <div>
            <label htmlFor="cover">Capa:</label>
            <input
             type="text"
              name="cover"
               id="cover"
               value={cover}
               onChange={(e) => setCover(e.target.value)}
                />
          </div>
          <button type="submit">Adicionar a biblioteca</button>
        </form>
      </div>
      <div className="games">
      {games.map((x) => (
        <div key={x.id} >
          <img
           src={x.cover}
            alt="teste"
 /> 
          <div>
          </div>
          <h2>{x.title}</h2>
          <button onClick={() => removeGame(x.id)}>Remover</button>
          </div> 
                 ))}
         </div>
    </>
  );
}

export default App;
