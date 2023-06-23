# comodoro
1 Tenho que melhorar a legibilidade do meu codigo
2 Melhora da logica 

# tecnicas aprendidas nesse projeto 

1 fazer um componente padrão com caracteristicas padrões do componente 
  A extends ButtonHTMLAttributes<HTMLButtonElement> 
    I  para ganhar todos os outros atributos do componente Button na interface de tipagem
  B Button = ({ theme, text, styleText, styleButton, ...props }: ButtonProps) 
    II vai receber ...props para representar o resto
  C Receber o {... props} dentro do button padrão 

2 fazer com que o componente receba tipos proprios 
   interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'primary' | 'secondary' | 'danger' | 'success';
    styleButton?: string
    text?: string | ReactNode
    styleText?: string
   }
   
   const buttonClass = theme ? classTheme[theme].button : ""

# Ainda não esta funcional 