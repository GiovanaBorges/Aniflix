import { Request, Response } from "express";
import { GetAllAnimeByGenreUseCase } from "./GetAllAnimeByGenreUseCase";

export class GetAllAnimeByGenreController{
    async execute(req:Request,res:Response){
        const {genre} = req.body

        const getAllAnimeByGenreUseCase = new GetAllAnimeByGenreUseCase()

        const result = await getAllAnimeByGenreUseCase.handle(genre)

        try {
            return res.status(200).json(result)    
        } catch (error) {
            return res.status(500).json(`${error} : error ao procurar anime pelo genero ${genre}`)    
        }
    }
}