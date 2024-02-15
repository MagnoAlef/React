import { useRef } from "react"
import { useState } from "react"
import RefExample from "./RefExample"


function App() {
let variable = 0

const [state,setState] = useState(0)

const ref = useRef(0) // Criar a ref current propriedade de valor atual da ref

const showValues = () => {
  alert(`
  Variavel : ${variable}
  Ref:${ref.current}
  State : ${state}`)
}
  return (
    <>
      <div>
        <h2>Exemplo de useRef com o Dom</h2>
        <RefExample/>
        <hr />
       <h1>Hello,Word!!!</h1>
       <hr />
       <p>Variavel : {variable}</p>
       <p>Ref : {ref.current}</p>
       <p>State : {state}</p>
       <button onClick={() => variable++}>Aumentar Variavel</button>
       <button onClick={() => ref.current++}>Aumentar Ref</button> {/**Mesmo o valor nao mudando diretamente na tela , ele persiste no valor  */}
       <button onClick={() => setState(state => state+1)}>Aumentar State</button>
       <button onClick={showValues}>Exibir valores</button>
      </div>
    
    </>
  )
}

export default App
