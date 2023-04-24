import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "../Layouts/DefaultLayout"
import { History } from "./History"
import { Home } from "./Home"

// funcionamento do componente :
// ele possui as rotas do projeto
// Routes é um componente do react-router-dom que renderiza as rotas
// Route é um componente do react-router-dom que renderiza uma rota
// Ao ter uma base padrão para todos os componentes em vez de repetir codigo eu posso definir um layout padrão para todas as rotas com o DefaultLayout
// e definir as rotas que serão renderizadas dentro dele

function App() {

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}

export default App

// Posso fazer diferente layouts por exemplo criar um layout de login e outro de cadastro e definir as rotas que serão renderizadas em cada um deles
