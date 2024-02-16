import { useContext } from "react";
import UserContext from "./contexts/UserContext";

function UserInfo() {

  const user = useContext(UserContext) // useContext hooks do react e o UserContext e nosso contexto
  
  return (
    <UserContext.Provider value={user}>
      {/** // Vou ter acesso a todo esse contexto
       */}
      <div>
        <h1>Informações do Usuario:</h1>
        <p>Nome: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </UserContext.Provider>
  );
}

export default UserInfo;
