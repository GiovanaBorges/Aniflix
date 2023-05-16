import {Navbar} from "../../components/navbar"
import {Card} from "../../components/card"

function Anime(){
    return(
    <>
        <Navbar />
        <div className="px-4 min-h-screen w-full">

        <div>
            <h1 className="text-white text-2xl m-4 font-bold">Animes Populares</h1>

        <div className="grid grid-cols-3 gap-4">
        <Card
                descricao="Integer vestibulum massa non justo consectetur commodo. Morbi eleifend volutpat diam. 
                Quisque fermentum lacinia mollis. Vivamus ac consectetur nisl, eget facilisis odio. Donec vel ornare enim. 
                Phasellus ut tinciduada. Quisqu leo a tempor. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                studio="aaaa" titulo="sdasd" qtdEp={1} qtdTemporada={1} linkImage="https://ogimg.infoglobo.com.br/in/21599267-93f-f22/FT1500A/690/Screenshot_1.png"
                coverImage="https://ogimg.infoglobo.com.br/in/21599267-93f-f22/FT1500A/690/Screenshot_1.png"
            />
             <Card
                descricao="Integer vestibulum massa non justo consectetur commodo. Morbi eleifend volutpat diam. 
                Quisque fermentum lacinia mollis. Vivamus ac consectetur nisl, eget facilisis odio. Donec vel ornare enim. 
                Phasellus ut tincidunt felis, ac feuia nostra, per inceptos himenaeos."
                studio="aaaa" titulo="sdasd" qtdEp={3} qtdTemporada={1}  linkImage="https://ogimg.infoglobo.com.br/in/21599267-93f-f22/FT1500A/690/Screenshot_1.png"
                coverImage="https://ogimg.infoglobo.com.br/in/21599267-93f-f22/FT1500A/690/Screenshot_1.png"
            />
            
            <Card
                descricao="Integer vestibulum massa non justo consectetur commodo. Morbi eleifend volutpat diam. 
                Quisque fermentum lacinia mollis. Vivque dapibus sodales leo a tempor. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                studio="aaaa" titulo="sdasd" qtdEp={3} qtdTemporada={1} key="2" linkImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeeAZa8n3Pce7PETmp6a25v7AQk1cd8HWxw&usqp=CAU"
                coverImage="https://ogimg.infoglobo.com.br/in/21599267-93f-f22/FT1500A/690/Screenshot_1.png"
            />
                <Card
                descricao="Integer vestibulum massa non justo consectetur commodo. Morbi eleifend volutpat diam. 
                Quisque fermentum lacinia mollis. Vivamus ac consectetur nisl, eget facilisis odio. Donec vel ornare enim. 
                Phasellus ut tinciduada. Quisqu leo a tempor. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                studio="aaaa" titulo="sdasd" qtdEp={1} qtdTemporada={1} linkImage="https://ogimg.infoglobo.com.br/in/21599267-93f-f22/FT1500A/690/Screenshot_1.png"
                coverImage="https://ogimg.infoglobo.com.br/in/21599267-93f-f22/FT1500A/690/Screenshot_1.png"
            />
             <Card
                descricao="Integer vestibulum massa non justo consectetur commodo. Morbi eleifend volutpat diam. 
                Quisque fermentum lacinia mollis. Vivamus ac consectetur nisl, eget facilisis odio. Donec vel ornare enim. 
                Phasellus ut tincidunt felis, ac feuia nostra, per inceptos himenaeos."
                studio="aaaa" titulo="sdasd" qtdEp={3} qtdTemporada={1}  linkImage="https://ogimg.infoglobo.com.br/in/21599267-93f-f22/FT1500A/690/Screenshot_1.png"
                coverImage="https://ogimg.infoglobo.com.br/in/21599267-93f-f22/FT1500A/690/Screenshot_1.png"
            />
            
            <Card
                descricao="Integer vestibulum massa non justo consectetur commodo. Morbi eleifend volutpat diam. 
                Quisque fermentum lacinia mollis. Vivque dapibus sodales leo a tempor. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                studio="aaaa" titulo="sdasd" qtdEp={3} qtdTemporada={1} key="2" linkImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeeAZa8n3Pce7PETmp6a25v7AQk1cd8HWxw&usqp=CAU"
                coverImage="https://ogimg.infoglobo.com.br/in/21599267-93f-f22/FT1500A/690/Screenshot_1.png"
            />
        </div>
        
        </div>
        </div>
     </>
    )
}

export default Anime

