import { CreateUserDTO } from "../../../Dto/UserDTOS/CreateUserDTO";
import { NextFunction, Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController{
    async execute(req:Request,res:Response,next:NextFunction){
        const createUserUseCase = new CreateUserUseCase()

        const user:CreateUserDTO = req.body

        const result = await createUserUseCase.handle(user,req,res,next)

        return res.status(200).json(result)
    }
}