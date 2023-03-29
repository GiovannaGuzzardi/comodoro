import { Play } from "@phosphor-icons/react"
import { useState } from "react"
import { Button } from "../../Lib/Button"

export const Home = () => {
    useState()
    const style = {
        input: "bg-transparent focus:outline-none border-gray-500 border-b-2 mx-4 w-32",
        span: " text-[10rem] max-sm:text-[5rem] "
    }
    return (
        <div className=" flex flex-col items-center justify-evenly h-full">
            <form action="" className=" text-[1.2rem] max-sm:flex max-sm:flex-col max-sm:items-center">
                <label htmlFor="task">Vou trabalhar em</label>
                <input id="task" className={`${style.input} w-32`} />
                <label htmlFor="minutesAmont">durante</label>
                <input
                    type="time"
                    id="minutesAmount"
                    className={`${style.input} w-[4.8rem]`} />
                <span>minutos</span>
            </form>
            <div className=" flex flex-col justify-center items-center self-center text-center">
                <div className="">
                    <span className={`${style.span}`}>0</span>
                    <span className={`${style.span}`}>0</span>
                    <span className={`${style.span}`}>:</span>
                    <span className={`${style.span}`}>0</span>
                    <span className={`${style.span}`}>0</span>
                </div>
                <Button
                    text={<>
                        <Play size={30} weight="fill" />
                        <p className=" text-[2.5rem] ml-3 ">Começar</p>
                    </>
                    } type="submit" styleText="flex items-center" theme="primary" styleButton=" px-4" />
            </div>
        </div>
    )
}