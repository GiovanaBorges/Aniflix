import { Request, Response } from "express";
import { EditSerieUseCase } from "./EditSerieUseCase";
import { editSerieDTO } from "../../../Dto/SerieDTOS/editSerieDTO";

export class EditSerieController{
    async execute(req:Request,res:Response){
      const serie:editSerieDTO = req.body

        const editSerieUseCase = new EditSerieUseCase()

        const result = await editSerieUseCase.handle(serie)

        return res.status(200).json(result)
    }
}