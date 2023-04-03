import {configureStore} from "@reduxjs/toolkit"
import market from "./marketSlice";

const store =  configureStore({
    reducer:{
        market,
    },
})

export default store

export type RootStateType =  ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch