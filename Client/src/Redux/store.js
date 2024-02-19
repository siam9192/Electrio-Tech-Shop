import { configureStore } from "@reduxjs/toolkit";
import ShortDetails from "./Reducer/ShortDetails";

const store = configureStore({
    reducer:{
    shortDetails: ShortDetails
    }
})

export default store;