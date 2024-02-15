import { useEffect, useState } from "react";

async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  return data.results; // results vem da propria api
}

function App() {
  const [pokemon , setPokemon] = useState([])

 //Vai ser executado somente a primeira vez , por não ter dependência 
  useEffect(() => {
    fetchPokemon().then(results => {
      console.log('Requisição realizada.')
      console.log(results)
      setPokemon(results)
    })
  } , [])
  return (
    <>
      <div className="app">
        <div>
          <h2>Pokemon</h2>
          <ul className="pokemon">
            {pokemon.map(mon => (
              <li key={mon.name}>
                <span>{mon.name}</span>
                <button>
                  Ver detalhes
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
