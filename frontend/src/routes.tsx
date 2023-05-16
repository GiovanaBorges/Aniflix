import  {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Login from  "./pages/Login"
import SignUp from  "./pages/signUp"
import Home from "./pages/home"
import Random from "./pages/random"
import MovieInfoPage from "./pages/movieInfoPage"
import Anime from "./pages/animes"
import Movies from "./pages/movies"

function AniflixRoutes(){
    return(
        <>
            <Router>
                <Routes>
                    <Route element={<Login/>} path="/signin"/>
                    <Route element={<SignUp/>} path="/signup"/>
                    <Route element={<Home/>} path="/"/>
                    <Route element={<Anime/>} path="/animes"/>
                    <Route element={<Movies/>} path="/movies"/>
                    <Route element={<Random />} 
                     path="/random"/>
                     <Route element={<MovieInfoPage/>} path="/infoMovie"/>
                </Routes>
            </Router>
        </>
    )
}

export default AniflixRoutes