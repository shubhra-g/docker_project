import express from 'express'
import { registerController, loginController } from "../controllers/usersControllers.js";


const userRouter = express.Router()

userRouter.post('/register', registerController)
userRouter.post('/login', loginController)

export default userRouter

