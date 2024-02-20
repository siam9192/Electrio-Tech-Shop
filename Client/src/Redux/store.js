import { configureStore } from "@reduxjs/toolkit";
import ShortDetails from "./Reducer/ShortDetails";
import AlertSlice from "./Reducer/AlertSlice";

const store = configureStore({
    reducer:{
    shortDetails: ShortDetails,
    alert : AlertSlice
    }
})

export default store;