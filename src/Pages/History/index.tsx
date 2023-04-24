interface ListProps {
    task: string;
    duration: string;
    start: string;
    status: string;
    colorStatus: "red" | "green" | "orange";
}

export const History = () => {

    const list: ListProps[] = [
        {
            task: "Simulado de Matemática",
            duration: "25 minutos",
            start: "Há cerca de 1 Mês",
            status: "Concluído",
            colorStatus: "green"
        },
        {
            task: "Tarefa de Logica",
            duration: "40 minutos",
            start: "Há cerca de 2 semanas",
            status: "Andamento",
            colorStatus: "orange"
        },
        {
            task: "Tarefa de Aoc",
            duration: "1 hora",
            start: "Há cerca de 1 semana",
            status: "Desistência",
            colorStatus: "red"
        },
    ]

    return (
        <div className="w-full p-2 ">
            <h2 className="">Historico</h2>
            <div className="w-full text-start my-2 overflow-auto">
                <div className="text-white bg-primary-700 rounded-xl grid grid-cols-4 w-full text-start p-3 my-2 shadow-sm shadow-black ">
                    <th className="text-start max-w-[25%]">Tarefa</th>
                    <th className="text-start">Duração</th>
                    <th className="text-start">Início</th>
                    <th className="text-start">Status</th>
                </div>
                {
                    list.map((item) => (
                        <div
                            key={item.task + item.start}
                            className="text-neutral-200 text-xs bg-neutral-700 rounded-xl grid grid-cols-4 w-full text-start p-3 my-2 shadow-sm shadow-black">
                            <td className="text-start break-words">{item.task}</td>
                            <td className="text-start break-words">{item.duration}</td>
                            <td className="text-start break-words">{item.start}</td>
                            <td className="text-start break-words flex items-start">
                                <div className="rounded-full  w-[0.5rem] h-[0.5rem] mx-2 mt-1"
                                    style={
                                        { backgroundColor: item.colorStatus }
                                    }
                                />
                                <p>{item.status}</p>
                            </td>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

// achar um jeito melhor de fazer um table
// fazer um componente de table
// fazer um componente de modal
// fazer um componente de input
// fazer um componente de button
// fazer um componente de select
// fazer um componente de checkbox
// fazer um componente de radio
// fazer um componente de datepicker
// fazer um componente de timepicker