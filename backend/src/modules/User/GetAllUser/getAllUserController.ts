import { Request, Response } from "express";
import { GetAllUserUseCase } from "./GetAllUserUseCase";

export class GetAllUserController{
    async execute(req:Request,res:Response){
        const getAllUserUseCase = new GetAllUserUseCase()

        const result = await getAllUserUseCase.handle()

        return res.status(200).json(result)
    }
}