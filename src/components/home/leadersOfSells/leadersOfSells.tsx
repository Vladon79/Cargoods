import style from "./leadersOfSells.module.css"

export const LeadersOfSells = () =>{
    return <div className={style.leadersOfSells}>
        <section className={style.leadersOfSellsSection}>
            <h2 className={style.h2}>Лидеры продаж</h2>
            <section className={style.leadersProductSection}>
                <div className={style.product}></div>
                <div className={style.product}></div>
                <div className={style.product}></div>
                <div className={style.product}></div>
            </section>
        </section>

    </div>
}