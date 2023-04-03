import style from "./button.module.scss"

type ButtonPropsType ={
  title:string
  onClick:()=>void
  className?: string
}

export const Button = ({title, onClick, className}:ButtonPropsType) => {
  return <button className={`${style.button} ${className}`} onClick={onClick} >{title}</button>
}