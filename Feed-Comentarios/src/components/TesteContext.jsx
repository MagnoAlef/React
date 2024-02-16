import { useContext } from "react"
import UserContext from "../context/UserContext"

export default function TesteContext(){
    const teste = useContext(UserContext)
    return (
        <UserContext.Provider value={teste}>
        <div>
            <h1>Hello,Word!!!</h1>
            <h2>{teste}</h2>
        </div>
        </UserContext.Provider>
    )
}

