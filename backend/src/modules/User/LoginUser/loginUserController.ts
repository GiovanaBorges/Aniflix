import { Request, Response } from "express";
import { LoginUserUseCase } from "./loginUserUseCase";

export class LoginUserController{
    async execute(req:Request,res:Response){
        const {email,password} = req.body

        const loginUserUseCase = new LoginUserUseCase()

        const result = await loginUserUseCase.handle(email,password)

        if(result){
            return res.status(200).json(`Login realizado com sucesso : ${result}`)
        }else{
            return res.status(500).json(`Erro ao realizar login : ${result}`)
        }
    }
}