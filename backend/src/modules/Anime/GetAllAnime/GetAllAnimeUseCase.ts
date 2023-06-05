import { Anime } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetAllAnimeUseCase{
    async handle():Promise<Anime[]>{
        const findAnimesAvailable = await prisma.anime.findMany()
        
        if(!findAnimesAvailable){
            throw new Error("Não existe nenhum anime")
        }

        return findAnimesAvailable
    }
}