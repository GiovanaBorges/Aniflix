import { Request, Response } from "express";
import { EditAnimeUseCase } from "./EditAnimeUseCase";
import { editAnimeDTO } from "../../../Dto/AnimeDTOS/editAnimeDTO";

export class EditAnimeController {
    async execute(req:Request,res:Response){
        const anime:editAnimeDTO = req.body

        const editAnimeUseCase = new EditAnimeUseCase()

        const result = await editAnimeUseCase.handle(anime)

        try {
            return res.status(200).json(result)    
        } catch (error) {
            return res.status(500).json(`${error} : error ao editar o anime`)    
        }
        
    }
}