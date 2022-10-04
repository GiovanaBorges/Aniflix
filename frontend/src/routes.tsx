import  {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Login from  "./pages/Login"
import SignUp from  "./pages/signUp"
import Home from "./pages/home"

function AniflixRoutes(){
    return(
        <>
            <Router>
                <Routes>
                    <Route element={<Login/>} path="/signin"/>
                    <Route element={<SignUp/>} path="/signup"/>
                    <Route element={<Home/>} path="/"/>
                </Routes>
            </Router>
        </>
    )
}

export default AniflixRoutes