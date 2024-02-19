import { RouterProvider } from "react-router-dom"
import router from "./router"

function App() {
  return (
    <RouterProvider router={router} /> // Componente do react para fazer as rotas
  )
}

export default App