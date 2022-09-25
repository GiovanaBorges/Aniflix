import  {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Login from  "./pages/Login"

function AniflixRoutes(){
    return(
        <>
            <Router>
                <Routes>
                    <Route element={<Login/>} path="/login"/>
                </Routes>
            </Router>
        </>
    )
}

export default AniflixRoutes