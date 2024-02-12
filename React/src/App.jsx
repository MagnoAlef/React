import useCounter from "../hooks/useCounter";

//Regra1 : Onde usar os hooks
  //Sempre chama os hooks dentro de funções reacts
//Rega2 : A ordem dos hooks   
  // Não usar hooks dentro de condicionais

export default function App() {
//Top level da função
  const {count,increment} = useCounter()
  return (
    <>
   <div>
    <span>Hello,Word!!!</span>
    <button onClick={increment}>{count}</button>
   </div>
    </>
  );
}
