import { Anime } from "@prisma/client";
import { createAnimeDTO } from "../../../Dto/AnimeDTOS/createAnimeDTO";
import { prisma } from "../../../prisma/client";

export class CreateAnimeUseCase{
    async handle({
        title,
        coverImage,
        image,
        release_date,
        studio,
        synopsis,
        genre,
        EpQuantity,
        TempQuantity
    }:createAnimeDTO):Promise<Anime>{
        const createAnime = await prisma.anime.create({
            data:{
                title,
                coverImage,
                image,
                release_date,
                studio,
                synopsis,
                genre,
                EpQuantity,
                TempQuantity
            }
        })

        if(!createAnime){
            throw new Error("Erro ao criar anime")
        }
        return createAnime

    }
}