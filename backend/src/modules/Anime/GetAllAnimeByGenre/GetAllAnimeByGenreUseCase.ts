import { Anime } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetAllAnimeByGenreUseCase{
    async handle(genreAnime:string):Promise<Anime[]>{
        const findAnimeByGenre = await prisma.anime.findMany({
            where:{
                genre:genreAnime
            }
        })

        if(!findAnimeByGenre){
            throw new Error("Não existe nenhum anime")
        }

        return findAnimeByGenre
    }
}