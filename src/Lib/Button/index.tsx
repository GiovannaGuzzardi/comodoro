import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'primary' | 'secondary' | 'danger' | 'success';
    styleButton?: string
    text?: string | ReactNode
    styleText?: string
}

export const Button = ({ theme, text, styleText, styleButton, ...props }: ButtonProps) => {
    const classTheme = {
        'primary': { button: "bg-primary-700 hover:bg-primary-600 rounded-lg", text: "text-white" },
        'secondary': { button: "bg-[#e2aa03]  hover:warning-primary rounded-lg", text: "text-white" },
        'danger': { button: "bg-critical-primary hover:bg-[#c7515e] rounded-lg", text: "text-white" },
        'success': { button: "bg-success-primary hover:bg-[#50bd46] rounded-lg", text: "text-white" },
    }


    const buttonClass = theme ? classTheme[theme].button : ""
    const textClass = theme ? classTheme[theme].text : ""
    const padrão = (!theme && !styleButton) && "bg-gray-600 hover:bg-gray-500 text-white rounded-lg"
    return (
        <button
            className={`${buttonClass} ${styleButton} ${padrão} `}
            {...props}
        >
            <div className={`${styleText} ${textClass} m-1`}>{text}</div>
        </button>
    )
}
