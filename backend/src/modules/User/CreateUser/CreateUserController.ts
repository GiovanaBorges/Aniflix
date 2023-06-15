import { CreateUserDTO } from "../../../Dto/UserDTOS/CreateUserDTO";
import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController{
    async execute(req:Request,res:Response){
        const createUserUseCase = new CreateUserUseCase()

        const user:CreateUserDTO = req.body

        const result = await createUserUseCase.handle(user)

        return res.status(200).json(result)
    }
}