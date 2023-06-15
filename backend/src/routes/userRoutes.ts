import express from "express"
import { CreateUserController } from "../modules/User/CreateUser/CreateUserController"
import { LoginUserController } from "../modules/User/LoginUser/loginUserController"
import { GetAllUserController } from "../modules/User/GetAllUser/getAllUserController"

const userRoutes = express.Router()

const createUserController = new CreateUserController()

const loginUserController = new LoginUserController()

const getAllUserController = new GetAllUserController()

userRoutes.post("/addUser",createUserController.execute)

userRoutes.post("/login",loginUserController.execute)

userRoutes.get("/all",getAllUserController.execute)

export {userRoutes}