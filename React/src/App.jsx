import { useState } from "react"
import Input from "./components/Input"

const games = [
  {
    "id": 1,
    "coverImage": "https://i.pinimg.com/originals/d0/8b/bd/d08bbd23315fa7a430d2d6ff2575339e.jpg",
    "title": "Super Mario Bros",
    "releaseYear": 1985,
    "description": "A classic platformer game."
  },
  {
    "id": 2,
    "coverImage": "https://cdn.mobygames.com/covers/4857336-the-legend-of-zelda-nes-front-cover.jpg",
    "title": "The Legend of Zelda",
    "releaseYear": 1986,
    "description": "A top-down adventure game."
  },
  {
    "id": 3,
    "coverImage": "https://www.hellandheavennet.com/files/final-fantasy/box-nes-us-1.jpg",
    "title": "Final Fantasy",
    "releaseYear": 1987,
    "description": "A classic role-playing game."
  },
  {
    "id": 4,
    "coverImage": "https://gamefaqs.gamespot.com/a/box/0/3/4/3034_front.jpg",
    "title": "Doom",
    "releaseYear": 1993,
    "description": "A first-person shooter game."
  },
  {
    "id": 5,
    "coverImage": "https://cdn.mobygames.com/covers/4056006-warcraft-orcs-humans-dos-front-cover.jpg",
    "title": "Warcraft",
    "releaseYear": 1994,
    "description": "A real-time strategy game."
  },
  {
    "id": 6,
    "coverImage": "https://i.pinimg.com/originals/a0/d0/9c/a0d09c9cd3eb770f8f83e23744da72fc.jpg",
    "title": "Half-Life",
    "releaseYear": 1998,
    "description": "A first-person shooter game."
  },
  {
    "id": 7,
    "coverImage": "http://media.ign.com/games/image/object/002/002226/Gran-Turismo-1_PS1_US_BOX.jpg",
    "title": "Gran Turismo",
    "releaseYear": 1998,
    "description": "A driving/racing simulator game."
  },
  {
    "id": 8,
    "coverImage": "https://cdn.mobygames.com/covers/3966925-halo-combat-evolved-xbox-front-cover.jpg",
    "title": "Halo",
    "releaseYear": 2001,
    "description": "A military science fiction shooter game."
  },
  {
    "id": 9,
    "coverImage": "http://s.emuparadise.org/fup/up/150757-Kingdom_Hearts_(USA)-1.jpg",
    "title": "Kingdom Hearts",
    "releaseYear": 2002,
    "description": "An action-based role-playing game with Disney and Final Fantasy characters."
  }
]

// let gameComponents = []

// games.forEach(game => {
//   gameComponents.push(<h2>{game.title}</h2>
//     )
// })
//Nesse caso poderia passar o gameComponents para renderizar os titulos dos games

function App() {
  const [password, setPassword] = useState("")
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)
  const [copyText, setCopyText] = useState("Copiar")

  const passwordSize = showInput ? customSize : 8

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <>
    <div>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(show => !show)}
        />
      </div>
      {showInput && (
        <div>
          <label htmlFor="customSize">Tamanho: </label>
          <Input passwordSize={customSize} setPasswordSize={setCustomSize} />
        </div>
      )}
      <button onClick={generate}>Gerar senha de {passwordSize} caracteres</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>Sua senha segura: {password}</div>
    </div>
    <div id='app'>

    <h1>Renderizar listar</h1>
    {games.map((x) => {
      return(
        <div key={x.id} style={{padding: '0 4rem 4rem'}}>
          <img
           src={x.coverImage}
            alt="teste"
            style={{height: '30rem' , width:'20rem' , objectFit:'cover'}} /> 
          <h2>{x.title}</h2>
          </div>
      )
    })}
    </div>
    </>
  )
}

export default App