import express from "express"
import { CreateAnimeController } from "../modules/Anime/CreateAnime/createAnimeController"
import { GetAllAnimeController } from "../modules/Anime/GetAllAnime/GetAllAnimeController"
import { DeleteAnimeController } from "../modules/Anime/DeleteAnime/DeleteAnimeController"
import { EditAnimeController } from "../modules/Anime/EditAnime/EditAnimeController"
import { GetAnimeByTitleController } from "../modules/Anime/GetByTitle/GetAnimeByTitleController"
import { GetAllAnimeByGenreController } from "../modules/Anime/GetAllAnimeByGenre/GetAllAnimeByGenreController"
const animeRoutes = express.Router()

const createAnimeController = new CreateAnimeController()
const getAllAnimeController = new GetAllAnimeController()
const deleteAnimeController = new DeleteAnimeController()
const editAnimeController = new EditAnimeController()

const getAnimeByTitleController = new GetAnimeByTitleController()
const getAnimeByGenreController = new GetAllAnimeByGenreController()


//create anime
animeRoutes.post("/addSerie", createAnimeController.execute)

//get all anime
animeRoutes.get("/list", getAllAnimeController.execute)

//delete anime
animeRoutes.delete("/deleteSerie", deleteAnimeController.execute)

//edit anime
animeRoutes.put("/editSerie", editAnimeController.execute)


// get by title
animeRoutes.get("/searchByTitle", getAnimeByTitleController.execute)

// get by genre
animeRoutes.get("/searchByGenre", getAnimeByGenreController.execute)


export {animeRoutes}