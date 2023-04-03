import {createSlice, PayloadAction} from "@reduxjs/toolkit";
type ProductCountryType = "USA" | "China" | "Germany"
type Product = {
    id: number
    title: string
    price: number
    manufacturer: string
    producingCountry: ProductCountryType
}
type ProductState = {
    shop: Product[]
}
const initialState: ProductState = {
    shop:[]
}

const marketSlice = createSlice({
    name:"market",
    initialState,
    reducers:{
        addProduct(state, action:PayloadAction<string>){
            state.shop.push()
        }
    }
})

export const {addProduct} = marketSlice.actions

export default marketSlice.reducer