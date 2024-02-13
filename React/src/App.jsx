//import useCounter from "../hooks/useCounter";



//Regra1 : Onde usar os hooks
  //Sempre chama os hooks dentro de funções reacts
//Rega2 : A ordem dos hooks   
  // Não usar hooks dentro de condicionais
import Input from './components/Input'
import { useState } from "react";
  function getRandom() {
    return Math.random();
  }

  


export default function App() {
//Top level da função
  //const {count,increment} = useCounter()
  const [passwordSize, setPasswordSize] = useState(12)
  const [copia,setCopia] = useState('Copiar')

  const [values , setValues] = useState()

  //Pegando valor do input pelo State


  
  const handleGerarClick = () => {
    const valueRandom = getRandom();
    setValues(valueRandom);
    setCopia('Copiar');
  };

  const handleCopiarClick = () => {
    if (values !== undefined) {
      navigator.clipboard.writeText(values.toString())
        .then(() => {
          setCopia('Copiado');
        })
        .catch((error) => {
          console.error('Erro ao copiar para a área de transferência', error);
        });
    }
  };

  return (
    <>
   <div>
    <span>Gerador de senhas</span>
    <div>
      <label htmlFor="passwordSize">Tamanho: </label>

     <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
    </div>
    <br />
    <button onClick={handleGerarClick}>Gerar senha de {passwordSize}</button>
    <button onClick={handleCopiarClick}>{copia}</button>
    <br />
    <span>{values}</span>
    {/* <button onClick={increment}>{count}</button> */}
   </div>
    </>
  );
}
