
import { Anime } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { editAnimeDTO } from "../../../Dto/AnimeDTOS/editAnimeDTO";

export class EditAnimeUseCase{
    async handle(anime:editAnimeDTO):Promise<Anime>{
        const findAnimeToUpdate = await prisma.anime.update({
            where:{
                id : anime.idAnime
            },
            data:{
                title:anime.title,
                coverImage: anime.coverImage,
                image: anime.image,
                release_date: anime.release_date,
                studio: anime.studio,
                synopsis: anime.synopsis,
                genre: anime.genre,
                EpQuantity: anime.EpQuantity,
                TempQuantity: anime.TempQuantity,
            }
        })
            if(!findAnimeToUpdate){
                throw new Error("Error on edit this anime")
            } 

        return findAnimeToUpdate
    }
}