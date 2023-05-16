import express from "express"
const movieRoutes = express.Router()

import {CreateMovieController} from "../modules/Movie/CreateMovie/CreateMovieController"
import { GetAllMovieController } from "../modules/Movie/GetAllMovie/GetAllMovieController"
import {EditMovieController} from "../modules/Movie/EditMovie/EditMovieController"
import { DeleteMovieController } from "../modules/Movie/DeleteMovie/DeleteMovieController"
import { GetMovieByGenreController } from "../modules/Movie/GetMovieByGenre/GetMovieByGenreController"
import { GetMovieByTitleController } from "../modules/Movie/GetMovieByTitle/GetMovieByTitleController"

const getAllMovieController = new GetAllMovieController()
const createMovieController = new CreateMovieController()
const editMovieController = new EditMovieController()
const deleteMovieController = new DeleteMovieController()

// Searchs 
const getMovieGenreController = new GetMovieByGenreController()
const getMovieTitleControler  = new GetMovieByTitleController()

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