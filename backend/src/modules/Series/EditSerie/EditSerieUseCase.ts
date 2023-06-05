import { Serie } from "@prisma/client";
import { editSerieDTO } from "../../../Dto/SerieDTOS/editSerieDTO";
import { prisma } from "../../../prisma/client";

export class EditSerieUseCase{
    async handle({
        idSerie,
        titleSerie, 
        coverImageSerie,
        imageSerie,
        EpQuantitySerie,
        TempQuantitySerie,
        release_dateSerie,
        synopsisSerie,
        genreSerie
    }:editSerieDTO):Promise<Serie>{
        const editSerie = await prisma.serie.update({
            where:{
                id:idSerie
            },
            data:{
                title:titleSerie, 
                coverImage:coverImageSerie,
                image:imageSerie,
                EpQuantity:EpQuantitySerie,
                TempQuantity:TempQuantitySerie,
                release_date:release_dateSerie,
                synopsis:synopsisSerie,
                genre:genreSerie
            }
        })

        if(!editSerie){
            throw new Error("Não foi encontrado nenhuma serie com esse ID")
        }

        return editSerie
    }
}