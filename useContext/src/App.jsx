import UserInfo from "./components/UserInfo";
import UserContext from "./contexts/UserContext";

function App() {
  const user = {
    name: "Joao",
    email: "joao@email.com",
  };

  return (
    <UserContext.Provider value={user}>
      {/** // Vou ter acesso a todo esse contexto
       */}
      <div>
        <h1>Hello,Word!!!</h1>
      </div>
      <UserInfo/>
    </UserContext.Provider>
  );
}

export default App;
