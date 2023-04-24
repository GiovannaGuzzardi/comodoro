import { ButtonHTMLAttributes, ReactNode } from "react";

// funcionamento do componente : 
// se ele receber theme ele vai ter uma estilização padrão
// text é o que o button tera internamente por exemplo um icon ou um texto 
// styleButton é uma string que pode ser passada para o button para estilizar ele
// styleText é uma string que pode ser passada para o text para estilizar ele
//  todos os eventos do button podem ser passados para o componente

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'primary' | 'secondary' | 'danger' | 'success';
    styleButton?: string
    text?: string | ReactNode
    styleText?: string
    disabledProps?: boolean
}

export const Button = ({ theme, text, styleText, disabledProps, styleButton, ...props }: ButtonProps) => {
    const classTheme = {
        'primary': { button: `hover:${disabledProps ? "bg-primary-700 opacity-60" : "bg-primary-600"} bg-primary-700   rounded-lg", text: "text-white`, text: "text-white" },
        'secondary': { button: `hover:${disabledProps ? "bg-[#e2aa03] opacity-60" : "warning-primary"} bg-[#e2aa03]   rounded-lg", text: "text-white`, text: "text-white" },
        'danger': { button: `hover:${disabledProps ? "bg-critical-primary opacity-60" : "warning-primary"} bg-critical-primary   rounded-lg", text: "text-white`, text: "text-white" },
        'success': { button: `hover:${disabledProps ? "bg-success-primary opacity-60" : "bg-[#50bd46]"} bg-critical-primary   rounded-lg", text: "text-white`, text: "text-white" },
    }


    const buttonClass = theme ? classTheme[theme].button : ""
    const textClass = theme ? classTheme[theme].text : ""
    const padrão = (!theme && !styleButton) && "bg-gray-600 hover:bg-gray-500 text-white rounded-lg"
    return (
        <button
            className={`${buttonClass} ${styleButton} ${padrão} `}
            {...props}
            disabled={disabledProps}
        >
            <div className={`${styleText} ${textClass} m-1`}>{text}</div>
        </button>
    )
}

// modificação util seria utilizar style para evitar bugs do tailwind de renderização