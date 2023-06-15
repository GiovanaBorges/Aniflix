import { Router } from "express";
import { movieRoutes } from "./movieRoutes";
import { serieRoutes } from "./serieRoutes";
import { animeRoutes } from "./animeRoutes";
import {userRoutes} from "./userRoutes"

const routes = Router();               

//route movie
routes.use("/movies", movieRoutes)
routes.use("/series", serieRoutes)
routes.use("/anime", animeRoutes)
routes.use("/user", userRoutes)

export { routes };