import  {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Login from  "./pages/Login"
import SignUp from  "./pages/signUp"

function AniflixRoutes(){
    return(
        <>
            <Router>
                <Routes>
                    <Route element={<Login/>} path="/login"/>
                    <Route element={<SignUp/>} path="/signup"/>
                </Routes>
            </Router>
        </>
    )
}

export default AniflixRoutes