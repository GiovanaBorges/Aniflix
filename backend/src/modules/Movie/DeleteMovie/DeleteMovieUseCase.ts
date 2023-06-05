import { Movie } from "@prisma/client";
import {prisma} from "../../../prisma/client"


export class DeleteMovieUseCase{
    async handle(idMovie: number): Promise<Movie> {
        try {
          const deletedMovie = await prisma.movie.delete({
            where: {
              id: idMovie,
            },
          });
    
          return deletedMovie;
        } catch (error) {
          console.log("Erro ao excluir o filme:", error);
          throw new Error("Ocorreu um erro ao excluir o filme.");
        }
      }
}