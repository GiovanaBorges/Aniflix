import { Movie } from "@prisma/client";

import {prisma} from "../../../prisma/client"
import { editMovieDTO } from "../../../Dto/MovieDTOS/editMovieDTO";

export class EditMovieUseCase{
    async handle({
    idMovie,
    titleMovie,
    coverImageMovie,
    imageMovie,
    durationMinutesMovie,
    release_dateMovie,
    synopsisMovie,
    genreMovie
    }:editMovieDTO):Promise<Movie>{

        try{

            const updateMovie = prisma.movie.update({
                where:{
                    id:idMovie
                },
                data:{
                    title:titleMovie,
                    coverImage:coverImageMovie,
                    image:imageMovie,
                    durationMinutes:durationMinutesMovie,
                    release_date:release_dateMovie,
                    synopsis:synopsisMovie,
                    genreMovie:genreMovie
                }
            })
    
            return updateMovie
        }catch(error){
            console.log("Erro ao editar o filme:", error);
            throw new Error("An eror occur editing movie.");
        }
    }
}