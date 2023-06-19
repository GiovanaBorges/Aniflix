import { Request, Response } from "express";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

export class CreateMovieController{
    async createMovie(req:Request,res:Response){
        const {
            title,
            coverImage,
            durationMinutes,
            release_date,
          
            synopsis,
            image,
            genreMovie
        } = req.body

        const createMovieUseCase = new CreateMovieUseCase()

        const result = await createMovieUseCase.handle({
            title,
            coverImage,
            image,
            durationMinutes,
            release_date,
      
            synopsis,
            genreMovie
        })

        return res.status(201).json(result)
    }
}