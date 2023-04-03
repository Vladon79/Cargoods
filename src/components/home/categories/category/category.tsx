import style from "./category.module.scss"
type CategoryType = {
    title: string
}

const Category = (props: CategoryType) =>{
    return(
        <div className={style.categoryContainer}>
            <h4>{props.title}</h4>
        </div>
    )
}

export default Category