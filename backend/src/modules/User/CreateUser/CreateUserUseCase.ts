import { User } from "@prisma/client";
import { CreateUserDTO } from "../../../Dto/UserDTOS/CreateUserDTO";
import { prisma } from "../../../prisma/client";
import { CriptFunction } from "../../../Utils/criptFunction";

export class CreateUserUseCase{
    async handle(user:CreateUserDTO):Promise<User>{
        const criptFunction = new CriptFunction()
        const passHash = criptFunction.CriptPass(user.password)

        const userData = await prisma.user.create({
            data : {
                password:passHash,
                name:user.name,
                email:user.email
            }
        })


        if(!userData){
            throw new Error("Erro ao criar Conta")
        }

        return userData
    }
}