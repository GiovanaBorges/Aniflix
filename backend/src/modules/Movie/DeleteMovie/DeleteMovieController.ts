import { Request, Response } from "express";
import { DeleteMovieUseCase } from "./DeleteMovieUseCase";

export class DeleteMovieController{
    async execute(req:Request,res:Response){
        const {id} = req.body

        const deleteMovieUseCase = new DeleteMovieUseCase

        try {
            const result = await deleteMovieUseCase.handle(id)
      
            return res.status(202).json(result);
          } catch (error) {
            return res.status(500).json({ error: "Erro ao excluir o filme" });
          }
        }
    
}