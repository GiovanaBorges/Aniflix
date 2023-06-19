import express, { NextFunction, Request, Response, response } from "express"
const movieRoutes = express.Router()

import {CreateMovieController} from "../modules/Movie/CreateMovie/CreateMovieController"
import { GetAllMovieController } from "../modules/Movie/GetAllMovie/GetAllMovieController"
import {EditMovieController} from "../modules/Movie/EditMovie/EditMovieController"
import { DeleteMovieController } from "../modules/Movie/DeleteMovie/DeleteMovieController"
import { GetMovieByGenreController } from "../modules/Movie/GetMovieByGenre/GetMovieByGenreController"
import { GetMovieByTitleController } from "../modules/Movie/GetMovieByTitle/GetMovieByTitleController"
import { JwtLogin } from "../middleare/jwtLogin"

const getAllMovieController = new GetAllMovieController()
const createMovieController = new CreateMovieController()
const editMovieController = new EditMovieController()
const deleteMovieController = new DeleteMovieController()

// Searchs 
const getMovieGenreController = new GetMovieByGenreController()
const getMovieTitleControler  = new GetMovieByTitleController()


//middleare 
const jwtLogin = new JwtLogin()

interface AuthenticateRequest extends Request {
    user?: any;
  }

// Middleware to authenticate the token
const authenticateToken = (req: AuthenticateRequest, res: Response, next: NextFunction) => {
    jwtLogin.AuthenticateToken(req, res, next);
  };
  

//MOVIES
// list all available movies
movieRoutes.get("/list",getAllMovieController.getAllMovie)
// create a new movie
movieRoutes.post("/addMovie",createMovieController.createMovie)
// edit movie
movieRoutes.put("/editMovie", editMovieController.execute)
// delete movie
movieRoutes.delete("/deleteMovie", deleteMovieController.execute)

// Searchs 
movieRoutes.get("/searchByTitle",getMovieTitleControler.execute)
movieRoutes.get("/searchByGenre",getMovieGenreController.execute)

export {movieRoutes}