import { Request, Response } from "express";
import {GetAllMovieUseCase} from "./GetAllMovieUseCase"
import { Movie } from "@prisma/client";

export class GetAllMovieController{
    async getAllMovie(req:Request,res:Response){
        const getAllMovieUseCase = new GetAllMovieUseCase()
        
        const result:any = await getAllMovieUseCase.getAllMovie()

        return res.status(201).json(result) 
    }
}

