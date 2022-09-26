import { Request, Response } from "express";
import { createMovieDTO } from "../../Dto/createMovieDTO";
import { prisma } from "../../prisma/client";

export class CreateMovieUseCase{
    async handle({
        title,
        coverImage,
        images,
        description,
        durationMinutes,
        release_date,
        studio ,
        synopsis
    }:createMovieDTO):Promise<Movie>{
    
    const movieAlreadyExist = await prisma.movie.findUnique({
        where:{
                title
        }
    })
    if(movieAlreadyExist){
        console.log("Error movie exists")
    }
    //create movie
    const movie = await prisma.movie.create({
        data: {
            title,
            coverImage,
            images,
            description,
            durationMinutes,
            release_date,
            studio ,
            synopsis
        },
      });
  
      return movie;
    }
}