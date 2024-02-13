
import { useState } from "react";

function getInitialValue(){
    //Usando essa função no State , toda vez que o state muda 
    //Vai chama a função o jeito correto e chama a função sendo executada () => 
    console.log('Obtendo valor inicial')
    return 1+1
}

export default function useCounter(){
    //Forma correta de iniciar função () => 
    const [count, setCount] = useState(() =>getInitialValue())

    const increment = () => {
       // setCount(count+1)
       // setCount(count+1) // Usando outra chama da função modificadora ,  porem o valor ainda não foi modificado

       setCount((currentState) => currentState + 1)
       setCount((currentState) => currentState + 1) // Usando esse padrão ele leva em consideração os valores atualizados
    }

    return { count , increment}
}

//hook customizado