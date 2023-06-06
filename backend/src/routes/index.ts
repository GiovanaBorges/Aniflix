import { Router } from "express";
import { movieRoutes } from "./movieRoutes";
import { serieRoutes } from "./serieRoutes";
import { animeRoutes } from "./animeRoutes";

const routes = Router();               

//route movie
routes.use("/movies", movieRoutes)
routes.use("/series", serieRoutes)
routes.use("/anime", animeRoutes)

export { routes };