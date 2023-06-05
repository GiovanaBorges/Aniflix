import { Movie,Prisma } from "@prisma/client"
import {prisma} from "../../../prisma/client"


interface MovieWhereInputWithGenre extends Prisma.MovieWhereInput {
    genre?: string;
}

export class GetMovieByGenreUseCase{
    async handle(genreMovie:string):Promise<Movie[]>{

        
        const moviesByGenre:Movie[] = await prisma.movie.findMany({
          where:{
            genreMovie: genreMovie
          } as MovieWhereInputWithGenre,
        })

        return moviesByGenre
    }
}