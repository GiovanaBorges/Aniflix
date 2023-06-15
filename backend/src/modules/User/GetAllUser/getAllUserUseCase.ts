import { User } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetAllUserUseCase{
    async handle():Promise<User[]>{
        const allUsersAvailable = prisma.user.findMany()

        if(!allUsersAvailable){
            throw new Error("Any user found!")
        }

        return allUsersAvailable
    }
}