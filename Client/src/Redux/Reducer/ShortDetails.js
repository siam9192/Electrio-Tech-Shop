import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: null
}

const shortDetailsSlice = createSlice(
{
    name:'short details',
    initialState,
    reducers:{
        insert: (state,action)=>{
            state.product = action.payload;

        }
    }
}
)

export const  {insert}  = shortDetailsSlice.actions
export default shortDetailsSlice.reducer