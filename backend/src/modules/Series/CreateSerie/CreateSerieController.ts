import { Request, Response } from "express";
import { CreateSerieUseCase } from "./CreateSerieUseCase";

export class CreateSerieController{
    async execute(req:Request,res:Response){
        const {
            title,
                coverImage,
                image,
                EpQuantity,
                TempQuantity,
                release_date,
                synopsis,
                genre
        } = req.body

        const createSerieUseCase = new CreateSerieUseCase()

        const result = await createSerieUseCase.handle({
            title,
            coverImage,
            image,
            EpQuantity,
            TempQuantity,
            release_date,
            synopsis,
            genre
        })
        try{
            return res.status(202).json(result);
        }catch(error){
            return res.status(500).json({ error: "Erro ao criar Serie" });
        }
    }
}