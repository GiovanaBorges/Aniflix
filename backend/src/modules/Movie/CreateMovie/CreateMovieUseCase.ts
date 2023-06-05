import { Request, Response } from "express";
import { createMovieDTO } from "../../../Dto/MovieDTOS/createMovieDTO";
import { prisma } from "../../../prisma/client";
import { Movie } from "@prisma/client";


export class CreateMovieUseCase{
    
    async handle({
        title,
        coverImage,
        image,
        durationMinutes,
        release_date,
        synopsis,
        genreMovie
    }:createMovieDTO):Promise<Movie>{
    
    //create movie
    const movie = await prisma.movie.create({
        data: {
            title,
            coverImage,
            durationMinutes,
            release_date,
            synopsis,
            image,
            genreMovie
        }
      });

  
      return movie;
    }
}