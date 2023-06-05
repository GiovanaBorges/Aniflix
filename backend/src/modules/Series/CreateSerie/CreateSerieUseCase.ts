import { Serie } from "@prisma/client";
import { CreateSerieDTO } from "../../../Dto/SerieDTOS/CreateSerieDTO";
import { prisma } from "../../../prisma/client";

export class CreateSerieUseCase{
    async handle({
        title,
        coverImage,
        image,
        EpQuantity,
        TempQuantity,
        release_date,
        synopsis,
        genre
    }:CreateSerieDTO):Promise<Serie>{
        
        try{
            const createSerie = await prisma.serie.create({
                data:{
                    title,
                    coverImage,
                    image,
                    EpQuantity,
                    TempQuantity,
                    release_date,
                    synopsis,
                    genre
                }
            })
            return createSerie
        }catch(error){
            throw new Error("Ocorreu um erro ao criar a serie.");
        }
      



        
    }
}