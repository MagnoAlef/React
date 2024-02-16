import { useEffect, useState } from "react"


function Counter(){
  const [counter,setCounter] = useState(0)

  useEffect(() => {
    console.log("O efeito colateral foi ativado")
   
    return () => {
      console.log('Fazendo a limpeza...')
      console.log('Componente desmontado')
    } 
  
  },[])
  
  return (
    <>
      <div>
      <h1>Hello,Word!!!</h1>
      <button onClick={() => setCounter(counter + 1)}>Contador: {counter}</button>
      </div>
    </>
  )
  
}

function App() {

const [show, setShow] = useState(false)

  return (
    <>
      <div>
        <div>
          <label htmlFor="show">Exibir</label>
          <input type="checkbox" value={show} onChange={() => setShow(!show)} />
        </div>
        {
          show ? (  <Counter/>) : ( null)
        }
    
      </div>
    </>
  )
}

export default App
