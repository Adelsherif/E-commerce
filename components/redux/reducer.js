import { createSlice } from "@reduxjs/toolkit";
import { products } from "./data";


export const reducerslice = createSlice({
    name:'api',
    initialState:{
        products:[],
        ids:[],
        fav:[],
        val:''
    },
    extraReducers: {
        [products.fulfilled]:(state,action) =>{
            state.products =  action.payload
        },
    },
    reducers:{
        searchValue: (state,action) =>{
            state.val=action.payload;
        },
        setids:(state,action) =>{
            const allIds =[...new Set(action.payload)]
            state.ids =allIds;
            localStorage.setItem("ids",JSON.stringify(state.ids))
        },
        getids:(state,action) =>{
            state.ids = action.payload
            localStorage.setItem("ids",JSON.stringify(state.ids))
            state.count = state.ids.length
        },
        favsId:(state,action) =>{
            const favIds =[...new Set(action.payload)]
            state.fav = favIds;
            localStorage.setItem("fav",JSON.stringify(state.fav))
            state.count = state.ids.length
        }
    }
})

export const { searchValue ,setids,getids,favsId } = reducerslice.actions;
export default reducerslice.reducer;