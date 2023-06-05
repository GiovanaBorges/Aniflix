import { Serie } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetSerieByTitleUseCase{
    async handle(title:string):Promise<Serie>{
        const findSerieByTitle = await prisma.serie.findUnique({
            where:{
                title:title
            }
        })

        if(!findSerieByTitle){
            throw new Error("Não foi encontrado nenhuma serie com esse titulo")
        }

        return findSerieByTitle
    }
}