import style from "./categories.module.scss"
import Category from "./category/category";

export const Categories = () =>{
    const categories = ["Car accessories", "Motor oils", "Car electronics","Car care", "Auto parts", "Glass washer fluid"]
    return <div className={style.categories}>
        <section className={style.categoriesSection}>
            <h2 className={style.h2}>Категории магазина</h2>
            <section className={style.categorySection}>
                {categories.map((i)=> <Category title={i}/>)}
            </section>
        </section>

    </div>
}