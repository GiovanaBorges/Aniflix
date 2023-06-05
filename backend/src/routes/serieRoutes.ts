import express from "express"
import { CreateSerieController } from "../modules/Series/CreateSerie/CreateSerieController"
import { GetAllSerieController } from "../modules/Series/GetAllSerie/GetAllSerieController"
import { GetSerieByTitleController } from "../modules/Series/GerSerieByTitle/GetSerieByTitleController"
import { GetAllSerieByGenreController } from "../modules/Series/GetAllSerieByGenre/GetAllSerieByGenreController"
import { DeleteSerieController } from "../modules/Series/DeleteSerie/DeleteSerieController"
import { EditSerieController } from "../modules/Series/EditSerie/EditSerieController"
const serieRoutes = express.Router()

const createSerieController = new CreateSerieController()
const getAllSerieController = new GetAllSerieController()
const deleteSerieController = new DeleteSerieController()
const editSerieController = new EditSerieController()

const getSerieByTitleController = new GetSerieByTitleController()
const getAllSerieByGenreController = new GetAllSerieByGenreController()

//create Serie
serieRoutes.post("/addSerie", createSerieController.execute)

//get all Series
serieRoutes.get("/list", getAllSerieController.execute)

//delete serie
serieRoutes.delete("/deleteSerie", deleteSerieController.execute)

//edit serie
serieRoutes.put("/editSerie", editSerieController.execute)


// get by title
serieRoutes.get("/searchByTitle", getSerieByTitleController.execute)

// get by genre
serieRoutes.get("/searchByGenre", getAllSerieByGenreController.execute)


export {serieRoutes}