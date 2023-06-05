import { Request, Response } from "express";
import { GetSerieByTitleUseCase } from "./GetSerieByTitleUseCase";

export class GetSerieByTitleController{
    async execute(req:Request,res:Response){
        const {title} = req.body
        
        const getSerieByTitleUseCase = new GetSerieByTitleUseCase()

        const result = await getSerieByTitleUseCase.handle(title)
        
        return res.status(200).json(result)
    }
}