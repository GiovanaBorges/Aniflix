import { Request, Response } from "express";
import { GetAllSerieUseCase } from "./GetAllSerieUseCase";

export class GetAllSerieController{
    async execute(req:Request,res:Response){
        const getAllSerieUseCase = new GetAllSerieUseCase

        const allMovies:any = await getAllSerieUseCase.handle()

        if(!allMovies){
            throw new Error("Não existe nenhuma serie")
        }

        return res.status(201).json(allMovies)
    }
}