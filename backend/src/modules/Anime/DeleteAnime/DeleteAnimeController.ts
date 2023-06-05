import { Request, Response } from "express";
import { DeleteAnimeUseCase } from "./DeleteAnimeUseCase";

export class DeleteAnimeController{
    async execute(req:Request,res:Response){
        const {idAnime} = req.body

        const deleteAnimeUseCase = new DeleteAnimeUseCase()

        const result = deleteAnimeUseCase.handle(idAnime)

        return res.status(200).json(result)
    }
}