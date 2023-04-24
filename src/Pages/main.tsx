import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../styles/index.css'
import App from './App'

// funcionamento do componente :
// ele é o componente principal que renderiza o app
// ele é renderizado no index.html
// ele tem um router que é o componente do react-router-dom que renderiza as rotas
// o context tera seus providers e consumers para que os componentes possam acessar o estado global definidos aqui

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
