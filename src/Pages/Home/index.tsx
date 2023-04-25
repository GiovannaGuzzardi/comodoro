import { zodResolver } from "@hookform/resolvers/zod";
import { Play } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { Button } from "../../Lib/Button";

interface ProjectProps {
    task: string;
    minutesAmount: number;
    start: string;
    status: string;
    colorStatus: "red" | "green" | "orange";
}

const newCycleValidation = zod.object({
    task: zod.string().max(30, "O nome do projeto deve ter no máximo 30 caracteres"),
    minutesAmount: zod
        .number()
        .min(1, "O tempo minimo de um ciclo é de 1 minuto")
        .max(60, 'O tempo maximo de um ciclo é de 60 minutos')
});

type NewCicleFormData = zod.infer<typeof newCycleValidation> // retorna o tipo inferido de uma validação zod

export const Home = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<NewCicleFormData>({
        resolver: zodResolver(newCycleValidation),
        defaultValues: {
            task: "",
            minutesAmount: 0
        }
    })

    const project: ProjectProps = {
        task: watch("task"),
        minutesAmount: watch("minutesAmount"),
        start: "",
        status: "andamento",
        colorStatus: "orange"
    }

    const handleCreateNewCycle = (data: NewCicleFormData) => {
        project.start = new Date().toLocaleTimeString()
        console.log(data)
        reset()
    }
    const style = {
        input: "bg-transparent focus:outline-none border-gray-700 border my-2 rounded-xl px-4 py-1 text-center text-lg w-full",
        span: " text-[10rem] max-sm:text-[3rem] px-2 bg-neutral-700 rounded-xl mx-2 font-black  "
    }

    return (
        <div className=" flex flex-col items-center justify-evenly h-full">
            <form
                onSubmit={handleSubmit(handleCreateNewCycle)}
                action=""
                className=" text-[1.2rem] max-sm:flex max-sm:flex-col max-sm:items-center ">
                <div className="w-full text-start grid grid-cols-2 gap-4">
                    <div className="flex items-center flex-col ">
                        <label htmlFor="task" className="mt-3 text-sm">Nome do Projeto</label>
                        <input
                            placeholder="Vou trabalhar em..."
                            id="task"
                            maxLength={30}
                            className={`${style.input}`}
                            {...register("task")}
                        />
                    </div>
                    <div className=" flex items-center flex-col">
                        <label htmlFor="minutesAmont" className="mt-3 text-sm">Duração</label>
                        <input
                            type="number"
                            id="minutesAmount"
                            placeholder="xx minutos"
                            max={60}
                            min={1}
                            className={`${style.input}`}
                            {...register("minutesAmount", { valueAsNumber: true })}
                        />
                    </div>
                </div>
                <div className=" flex flex-col justify-center items-center self-center text-center">
                    <div className="py-10">
                        <span className={`${style.span} `}>0</span>
                        <span className={`${style.span} `}>0</span>
                        <span className={`${style.span} bg-transparent  `}>:</span>
                        <span className={`${style.span} `}>0</span>
                        <span className={`${style.span} `}>0</span>
                    </div>
                    <Button
                        type="submit"
                        disabledProps={!project.task || !project.minutesAmount}
                        text={<>
                            <Play size={30} weight="fill" />
                            <p className=" text-[2.5rem] ml-3 ">Começar</p>
                        </>
                        }
                        styleText="flex items-center"
                        theme="primary"
                        styleButton=" px-4"
                    />
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

    // para validação usar outras bibliotecas como yup, joi, zod, etc
    // retorna um objeto com varias funções para trabalhar com formularios
    //  register : registra um input no formulario
    // handleSubmit : função que recebe uma função como parametro, essa função é executada quando o formulario é submetido