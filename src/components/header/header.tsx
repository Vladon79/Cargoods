import style from "./header.module.scss"

export const Header = () =>{
    return(
    <div className={style.header}>
        <section className={style.headerSection}>
            <p>ПН-СБ – 10:00 - 19:00</p>
            <p>pogta@gmail.com</p>
            <section className={style.langSection}>
                <button className={style.lang}>ENG</button>
                <button className={style.lang}>RUS</button>
            </section>
            <button>Войти</button>
        </section>

    </div>
    )
}