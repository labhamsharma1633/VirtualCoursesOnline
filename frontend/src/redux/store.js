import {configureStore} from "@reduxjs/toolkit"
import { setUserData } from "./userSlice.js"
import userReducer from "./userSlice.js"; 



export const store=configureStore({
    reducer:{
        user:userReducer,
    }

})