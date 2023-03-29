import { Outlet } from "react-router-dom"
import { Header } from "../Components/Header"


export const DefaultLayout = () => {
    return (
        <div className=" flex flex-col lg:justify-center  lg:items-center w-[100vw] min-h-[100vh] bg-neutral-800 text-white">
            <div className="max-w-[100vw] max-h-[100vh] px-10 py-10 w-[60rem] lg:h-[40rem] h-[100vh] bg-neutral-800 shadow-xl shadow-neutral-900 lg:rounded-2xl overflow-hidden">
                <Header />
                <div className=" rounded-lg h-[90%] my-4 px-1">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}