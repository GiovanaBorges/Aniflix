import { Movie } from "@prisma/client";
import {prisma} from "../../../prisma/client"

export class GetMovieByTitleUseCase{
    async handle(titleMovie:string):Promise<Movie[]>{
        const findMovieByTitle = await prisma.movie.findMany({
            where:{
                title:titleMovie
            }
        })

        if(!findMovieByTitle){
            console.log("nao existe nenhum fime come esse nome")
        }

        return findMovieByTitle
    }
}