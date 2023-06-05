import { Request, Response } from "express";
import { DeleteSerieUseCase } from "./DeleteSerieUseCase";

export class DeleteSerieController{
    async execute(req:Request,res:Response){
        const {idSerie} = req.body

        const deleteSerieUseCase = new DeleteSerieUseCase()

        const result = await deleteSerieUseCase.handle(idSerie)

        return res.status(200).json(result)
    }
}