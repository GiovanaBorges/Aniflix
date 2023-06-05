import { Request, Response } from "express";
import { createAnimeDTO } from "../../../Dto/AnimeDTOS/createAnimeDTO";
import { CreateAnimeUseCase } from "./createAnimeUseCase";

export class CreateAnimeController{
    async execute(req:Request,res:Response){
        const anime:createAnimeDTO = req.body

        const createAnimeUseCase = new CreateAnimeUseCase()

        const result = await createAnimeUseCase.handle(anime)

        return res.status(200).json(result)
    }
}