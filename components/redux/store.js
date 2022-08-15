import { configureStore } from "@reduxjs/toolkit"
import  reducerslice  from "./reducer"

export const store = configureStore({
    reducer:{
        products:reducerslice,
    }
})
