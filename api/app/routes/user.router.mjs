import { Router } from "express";
import { addUser, getUser } from "../controller/user.controller.mjs";

const userRouter = Router()

userRouter.route('/')
        .get(getUser)
        .post(addUser)

export default userRouter 