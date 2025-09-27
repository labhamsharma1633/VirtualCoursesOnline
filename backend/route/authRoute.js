import express from "express"
import { login, logOut, resetPassword, sendOTP, signUp, verifyOTP } from "../controller/authController.js";
const authRouter=express.Router();
authRouter.post("/signup",signUp);
authRouter.post("/login",login);
authRouter.get("/logout",logOut);
authRouter.post("/sendotp",sendOTP)
authRouter.post("/verifyotp",verifyOTP)
authRouter.post("/resetpassword",resetPassword)


export default authRouter;