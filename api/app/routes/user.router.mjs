import { Router } from "express";
import { addUser } from "../controller/user.controller.mjs";

const userRouter = Router()

userRouter.route('/')
        .get()
        .post(addUser)

export default userRouter 