import { Request, Response } from "express";
import { GetMovieByTitleUseCase } from "./GetMovieByTitleUseCase";

export class GetMovieByTitleController{
    async execute(req:Request,res:Response){
        const {title} = req.body

        const getMovieByTitleUseCase = new GetMovieByTitleUseCase()

        const result = await getMovieByTitleUseCase.handle(title)

        return res.status(201).json(result)
    }
}