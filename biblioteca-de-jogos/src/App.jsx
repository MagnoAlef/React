
import Game from "./components/Game";
import NewGameForm from "./components/NewGameForm";
import useGameCollection from "./hooks/useGameCollection";

function App() {
const {games,addGame,removeGame}  = useGameCollection()

  return (
    <>
      <div id="app">
        <h1>biblioteca de jogos</h1>
        <NewGameForm addGame={addGame} />
      </div>
      <div className="games">
        {games.map((x) => (
          <Game
            key={x.id}
            title={x.title}
            cover={x.cover}
            onRemove={() => removeGame(x.id)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
