import { configureStore } from "@reduxjs/toolkit";
import boxSlice from "./reducers/boxSlice";

export const store = configureStore({
    reducer: {
        box: boxSlice
    }
})