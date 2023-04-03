import style from "./main.module.scss"
import car from "../../assest/icon/car.svg"
import cart from "../../assest/icon/cart.svg"
import search from "../../assest/icon/search.svg"
import {NavLink} from "react-router-dom";

export const Main = () =>{
    const iconStyle = (logo: string) => ({
        backgroundImage: 'url(' + logo + ')',
    });

    const pages = [
        {link:"/home",title:"Главная"},
        {link:"/shop",title:"Магазин"},
        {link:"/blog",title:"Блог"},
        {link:"/buyers",title:"Покупателям"},
        {link:"/contacts",title:"Контакты"}
        ]
    return (
        <div className={style.main}>
            <section className={style.imgSection}>
                <a style={iconStyle(car)} className={style.carIcon}/>
            </section>
            <section className={style.mainSection}>
                {pages.map(p=><NavLink to={p.link} className={({ isActive, isPending }) =>
                     isActive ? style.activeLink : style.link
                }>{p.title}</NavLink>)}
            </section>
            <section className={style.iconSection}>
                <a style={iconStyle(search)} className={style.searchIcon}/>
                <a style={iconStyle(cart)} className={style.cartIcon}/>
            </section>

        </div>
    )
}