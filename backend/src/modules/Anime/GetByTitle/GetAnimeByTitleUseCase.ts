import { Anime } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetAnimeByTitleUseCase{
    async handle(titleAnime:string):Promise<Anime[]>{
        const findAnimeByTitle = prisma.anime.findMany({
            where:{
                title:titleAnime
            }
        })

        if(!findAnimeByTitle){
            throw new Error("Não foi possivel achar nenhum anime com esse titulo")
        }

        return findAnimeByTitle
    }
}