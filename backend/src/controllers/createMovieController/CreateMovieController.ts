import { Request, Response } from "express";

export class CreateMovieController{
    async CreateMovie(req:Request,res:Response){
        console.log("movie controller")
    }
}

