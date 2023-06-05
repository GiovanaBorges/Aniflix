import { Request, Response } from "express";
import { GetAllSerieByGenreUseCase } from "./GetAllSerieByGenreUseCase";

export class GetAllSerieByGenreController{
    async execute(req:Request,res:Response){
        const {genre} = req.body

        const getAllSerieByGenreUseCase = new GetAllSerieByGenreUseCase()

        
        try{
            const result = await getAllSerieByGenreUseCase.handle(genre)
            return res.status(200).json(result)
        }catch(error){
            return res.status(400).json({error:"Nao foi encontrado nenhuma serie desse genero"})
        }
    }
}