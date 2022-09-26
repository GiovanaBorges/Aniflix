import { Router } from "express";
import { movieRoutes } from "./movieRoutes";

const routes = Router();               

//route movie
routes.use("/movies", movieRoutes);

export { routes };