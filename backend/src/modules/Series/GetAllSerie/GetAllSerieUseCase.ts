import { Serie } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetAllSerieUseCase{
    async handle():Promise<Serie[]>{
        const allSeriesAvailable = await prisma.serie.findMany()
        
        if(!allSeriesAvailable){
            throw new Error("Não existe nenhuma sserie disponivel")
        }
        return allSeriesAvailable
    }
}