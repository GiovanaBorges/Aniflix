import { Request, Response } from "express";

import { EditMovieUseCase } from "./EditMovieUseCase";
import { editMovieDTO } from "../../../Dto/MovieDTOS/editMovieDTO";

export class EditMovieController{
    async execute(req:Request,res:Response){
        const movie:editMovieDTO = req.body

        const editMovieUseCase = new EditMovieUseCase()

        try{
            const result = await editMovieUseCase.handle(movie)
            return res.status(202).json(result)
        }catch(error){
            return res.status(500).json({ error: "Erro ao editar movie" });
        }
        
    }
}