import {Navbar} from "../../components/navbar"
import {Card} from "../../components/card"
import axios from "axios"
import {useState,useEffect} from "react"
import { Movie } from "../../Dtos/MovieDTO"

function Movies(){
    const [moviesAvailable,SetmoviesAvailable]:any = useState([])

    useEffect(() =>{
        const getAllMoviesAvailable = async () =>{
            const result = axios.get("http://localhost:8085/movies/list").then(res =>{
                console.log(res)
                SetmoviesAvailable(res)
            }).catch(error =>{
                console.log(error)
            })
    
            console.log(result)
        }

        getAllMoviesAvailable()
    },[])
   
    
    return(
    <>
        <Navbar />
        <div className="px-4 min-h-screen w-full">

        <div>
            <h1 className="text-white text-2xl m-4 font-bold">Filmes populares</h1>

        <div className="grid grid-cols-3 gap-4">

            {moviesAvailable.map((movie:Movie)=>(
                <Card
                descricao={movie.synopsis}
                studio="bosta" titulo="sdasd" qtdEp={1} qtdTemporada={1} linkImage="https://ogimg.infoglobo.com.br/in/21599267-93f-f22/FT1500A/690/Screenshot_1.png"
                coverImage="https://ogimg.infoglobo.com.br/in/21599267-93f-f22/FT1500A/690/Screenshot_1.png"
            />
            ))}

    
        </div>
        
        </div>
        </div>
     </>
    )
}

export default Movies

