import {Navbar} from "../../components/navbar"
import {Card} from "../../components/card"

function Home(){
    return(
    <>
        <Navbar />
        <div className="container px-4">

        
        <h1 className="text-white text-2xl m-4 font-bold">Animes Populares</h1>
        <div className="flex justify-start">
          
            <Card
                descricao="Integer vestibulum massa non justo consectetur commodo. Morbi eleifend volutpat diam. 
                Quisque fermentum lacinia mollis. Vivamus ac consectetur nisl, eget facilisis odio. Donec vel ornare enim. 
                Phasellus ut tinciduada. Quisqu leo a tempor. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                studio="aaaa" titulo="sdasd" qtdEp={1} qtdTemporada={1}
            />
             <Card
                descricao="Integer vestibulum massa non justo consectetur commodo. Morbi eleifend volutpat diam. 
                Quisque fermentum lacinia mollis. Vivamus ac consectetur nisl, eget facilisis odio. Donec vel ornare enim. 
                Phasellus ut tincidunt felis, ac feuia nostra, per inceptos himenaeos."
                studio="aaaa" titulo="sdasd" qtdEp={3} qtdTemporada={1}
            />
            
            <Card
                descricao="Integer vestibulum massa non justo consectetur commodo. Morbi eleifend volutpat diam. 
                Quisque fermentum lacinia mollis. Vivque dapibus sodales leo a tempor. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                studio="aaaa" titulo="sdasd" qtdEp={3} qtdTemporada={1} key="2"
            />
        </div>
        </div>
     </>
    )
}

export default Home

