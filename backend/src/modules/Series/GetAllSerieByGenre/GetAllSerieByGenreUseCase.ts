import { Serie } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetAllSerieByGenreUseCase{
    async handle(genreSerie:string):Promise<Serie[]>{
        const seriesByEspecifGenre = await prisma.serie.findMany({
            where:{
                genre: genreSerie
            }
        })

        if(!seriesByEspecifGenre){
            throw new Error("Não foi encontrado nenhuma serie com esse genero")
        }

        return seriesByEspecifGenre
    }
}