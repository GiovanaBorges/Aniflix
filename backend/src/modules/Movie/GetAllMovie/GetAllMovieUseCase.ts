import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";
import { Movie } from "@prisma/client";

export class GetAllMovieUseCase{
    async getAllMovie():Promise<Movie[]>{
         //create movie
             const findAllmovies: Movie[] = await prisma.movie.findMany()
             
             if(!findAllmovies){
                throw new Error("Dont exists any movie")
             }

             return findAllmovies
    }
}