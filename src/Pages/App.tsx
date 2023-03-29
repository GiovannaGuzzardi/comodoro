import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "../Layouts/DefaultLayout"
import { History } from "./History"
import { Home } from "./Home"

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
