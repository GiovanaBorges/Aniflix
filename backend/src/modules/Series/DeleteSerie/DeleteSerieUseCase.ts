import { Serie } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class DeleteSerieUseCase{
    async handle(idSerie:number):Promise<Serie>{
        const findSerieToDelete = await prisma.serie.delete({
            where:{
                id:idSerie
            }
        })

        if(!findSerieToDelete){
            throw new Error("Não foi encontrado nenhuma serie com esse ID")
        }

        return findSerieToDelete
    }
}