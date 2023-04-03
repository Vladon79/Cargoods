import React from 'react';
import style from './App.module.css';
import {Header} from "./components/header/header";
import {Main} from "./components/main/main";
import {Footer} from "./components/footer/footer";
import {Routes, Route} from "react-router-dom";
import Shop from "./components/shop/shop";
import Home from "./components/home/home";


function App() {
  return (
    <div className={style.App}>
        <Header />
        <section className={style.mainSection}>
            <Main/>
        </section>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
