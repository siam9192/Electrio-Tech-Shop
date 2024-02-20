import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name:'alert',
    initialState:{
        status: false,
        text: null
    },
    reducers:{
        handleAlert :(state,{payload})=>{
        state.status = payload.status
        state.text = payload.text
        
        }
    }
})

export const {handleAlert} = alertSlice.actions;
export default alertSlice.reducer