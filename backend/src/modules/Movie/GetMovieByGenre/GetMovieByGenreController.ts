import { Request, Response } from "express";
import { GetMovieByGenreUseCase } from "./GetMovieByGenreUseCase";

export class GetMovieByGenreController{
    async execute(req:Request,res:Response){
        const {genreMovie} = req.body

        const getMovieByGenreUseCase = new GetMovieByGenreUseCase()

        const result = await getMovieByGenreUseCase.handle(genreMovie)

        return res.status(201).json(result)
    }
}