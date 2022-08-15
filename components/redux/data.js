import { createAsyncThunk } from "@reduxjs/toolkit";


export const products = createAsyncThunk('json' ,
         async () =>{
      const result= fetch('https://raw.githubusercontent.com/Adelsherif/productsApi/master/productsApi.json').then(resp => resp.json()).then(data => data)
         return result;
      }
      )