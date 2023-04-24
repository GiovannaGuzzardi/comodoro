import { Outlet } from "react-router-dom"
import { Header } from "../Components/Header"

// funcionamento do componente :
// ele é um layout padrão que pode ser utilizado em todas as rotas
// ele tem um header e um outlet que é onde as rotas são renderizadas
// o header é um componente que pode ser utilizado em qualquer layout
// o outlet é um componente do react-router-dom que renderiza as rotas

export const DefaultLayout = () => {
    return (
        <div className=" flex flex-col lg:justify-center  lg:items-center w-[100vw] min-h-[100vh] bg-neutral-800 text-white">
            <div className="max-w-[100vw] max-h-[100vh] px-10 py-10 w-[60rem] lg:h-[40rem] h-[100vh] bg-neutral-800 shadow-xl shadow-neutral-900 lg:rounded-2xl overflow-hidden">
                <Header />
                <div className=" rounded-lg h-[90%]  my-4 px-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}