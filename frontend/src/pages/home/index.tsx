import {Navbar} from "../../components/navbar"
import {Card} from "../../components/card"
import { useEffect, useState } from "react"
import axios from "axios"
import { Movie } from "../../Dtos/MovieDTO"

function Home(){
    const [moviesAvailable,SetmoviesAvailable]:any = useState([])

    useEffect(() =>{
        const getAllMoviesAvailable = async () =>{
            axios.get("http://localhost:8085/movies/list").then(res =>{
                console.log(res.data)
                SetmoviesAvailable(res.data)
            }).catch(error =>{
                console.log(error)
            })
    
           
        }

        getAllMoviesAvailable()
    },[])


    return(
    <>
        <Navbar />
        <div className="px-4 min-h-screen w-full">

        <div>
            <h1 className="text-white text-2xl m-4 font-bold">Series Populares</h1>

        <div className="grid grid-cols-3 gap-4">
       
        {moviesAvailable.map((movie:Movie)=>(
                <Card
                descricao={movie.synopsis}
                studio="bosta" titulo={movie.title} qtdEp={1} qtdTemporada={1} linkImage={movie.image}
                coverImage={movie.coverImage}
            />
            ))}
        </div>
        
        </div>
        </div>
     </>
    )
}

export default Home

