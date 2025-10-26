import {configureStore} from "@reduxjs/toolkit"
import { setUserData } from "./userSlice.js"
import userReducer from "./userSlice.js"; 
import courseSlice from "./courseSlice.js"



export const store=configureStore({
    reducer:{
        user:userReducer,
        course:courseSlice
    }

})