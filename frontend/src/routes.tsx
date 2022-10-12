import  {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Login from  "./pages/Login"
import SignUp from  "./pages/signUp"
import Home from "./pages/home"
import Random from "./pages/random"

function AniflixRoutes(){
    return(
        <>
            <Router>
                <Routes>
                    <Route element={<Login/>} path="/signin"/>
                    <Route element={<SignUp/>} path="/signup"/>
                    <Route element={<Home/>} path="/"/>
                    <Route element={<Random 
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit donec morbi vulputate molestie. Vitae interdum ac mi et congue cras tortor pellentesque pulvinar. Sem in eget hendrerit sed. Non amet, eget nunc, fermentum risus congue massa, in."
                     titulo="Demon slayer" studio="aaaaaaaaa"/>} 
                     path="/random"/>
                </Routes>
            </Router>
        </>
    )
}

export default AniflixRoutes