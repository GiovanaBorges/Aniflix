import { Anime } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class DeleteAnimeUseCase{
    async handle(idAnime:number):Promise<Anime>{
        const findAnimeDeleted = await prisma.anime.delete({
            where:{
                id:idAnime
            }
        })

        if(!findAnimeDeleted){
            throw new Error("Erro ao deletar o anime")
        }
        return findAnimeDeleted
    }
}