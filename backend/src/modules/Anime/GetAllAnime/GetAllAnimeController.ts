import { Request, Response } from "express";
import { GetAllAnimeUseCase } from "./GetAllAnimeUseCase";

export class GetAllAnimeController{
    async execute(req:Request,res:Response){
        const getAllAnimeUseCase = new GetAllAnimeUseCase()

        const result = await getAllAnimeUseCase.handle()

        return res.status(200).json(result)
    }
}