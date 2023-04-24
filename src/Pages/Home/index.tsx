import { Play } from "@phosphor-icons/react";
import { useState } from "react";
import { Button } from "../../Lib/Button";

interface ProjectProps {
    task: string;
    duration: string[];
    start: string;
    status: string;
    colorStatus: "red" | "green" | "orange";
}

export const Home = () => {
    const [project, setProject] = useState<ProjectProps>({
        task: "",
        duration: ["0", "0", ":", "0", "0"],
        start: "",
        status: "",
        colorStatus: "green"
    }
    )

    const style = {
        input: "bg-transparent focus:outline-none border-gray-500 border-b-2 mx-4 w-32",
        span: " text-[10rem] max-sm:text-[5rem] "
    }
    return (
        <div className=" flex flex-col items-center justify-evenly h-full">
            <form action="" className=" text-[1.2rem] max-sm:flex max-sm:flex-col max-sm:items-center ">
                <label htmlFor="task">Vou trabalhar em</label>
                <input
                    placeholder="Nome do Projeto"
                    id="task"
                    className={`${style.input} w-44`}
                    onChange={(e) => setProject({ ...project, task: e.target.value })}
                />
                <label htmlFor="minutesAmont">durante</label>
                <input
                    type="time"
                    id="minutesAmount"
                    className={`${style.input} w-[6rem]`}
                    onChange={(e) => setProject({ ...project, duration: e.target.value.split("") })}
                />
                {/* 15:25 retorna isso */}
                <span>horas</span>
                <div className=" flex flex-col justify-center items-center self-center text-center">
                    <div className="">
                        <span className={`${style.span}`}>{project.duration[0]}</span>
                        <span className={`${style.span}`}>{project.duration[1]}</span>
                        <span className={`${style.span}`}>{project.duration[2]}</span>
                        <span className={`${style.span}`}>{project.duration[3]}</span>
                        <span className={`${style.span}`}>{project.duration[4]}</span>
                    </div>
                    <Button
                        type="submit"
                        onClick={() => alert("clicou")}
                        disabledProps={project.task === ""}
                        text={<>
                            <Play size={30} weight="fill" />
                            <p className=" text-[2.5rem] ml-3 ">Começar</p>
                        </>
                        }
                        styleText="flex items-center"
                        theme="primary"
                        styleButton=" px-4" />
                </div>
            </form>
        </div>
    )
}

// a fazer : 
// - fazer o botão de começar funcionar
// - fazer o botão de começar mudar para um botão de parar
// - fazer o botão de parar funcionar
// - fazer o botão de parar mudar para um botão de começar
// - fazer validações

// com formularios posso trabalhar com controlled e uncontrolled components
// controlled components : 
// - são componentes que tem o valor controlado pelo react em tempo real atraves do estado
// uncontrolled components :
// - são componentes que tem o valor controlado pelo proprio html, e o react só pega o valor quando o usuario submete o formulario

// dar uma componentizada de leves nesse trem