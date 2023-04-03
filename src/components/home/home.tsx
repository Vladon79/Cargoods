import {News} from "./news/news";
import {Categories} from "./categories/categories";
import {LeadersOfSells} from "./leadersOfSells/leadersOfSells";
import React from "react";


const Home = ()=>{
    return(
        <>
            <News/>
            <Categories/>
            <LeadersOfSells/>
        </>
    )
}

export default Home