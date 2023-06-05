import { Request, Response } from "express";
import { GetAnimeByTitleUseCase } from "./GetAnimeByTitleUseCase";

export class GetAnimeByTitleController{
    async execute(req:Request,res:Response){
        const {titleAnime} = req.body

        const getAnimeByTitleUseCase = new GetAnimeByTitleUseCase()

        const result = await getAnimeByTitleUseCase.handle(titleAnime)

        return res.status(200).json(result)
    }
}