import { User } from "@prisma/client";
import { CreateUserDTO } from "../../../Dto/UserDTOS/CreateUserDTO";
import { prisma } from "../../../prisma/client";
import { CriptFunction } from "../../../Utils/criptFunction";
import { JwtLogin } from "../../../middleare/jwtLogin";
import { NextFunction, Request,Response } from "express";

export class CreateUserUseCase{
    async handle(user:CreateUserDTO ,req:Request ,res:Response,next:NextFunction):Promise<User>{
        const criptFunction = new CriptFunction()
        const passHash = criptFunction.CriptPass(user.password)
        const jwtLogin = new JwtLogin
     
       

        const userData = await prisma.user.create({
            data : {
                password:passHash,
                name:user.name,
                email:user.email
            }
        })

        jwtLogin.createJwtToken(user.email, req, res,next)

        if(!userData){
            throw new Error("Erro ao criar Conta")
        }

        

        return userData
    }
}