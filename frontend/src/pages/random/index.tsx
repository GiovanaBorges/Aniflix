import {Navbar} from "../../components/navbar"
import {Card} from "../../components/card"
import { Button } from "../../components/button"

function Random(){
    return(
    <>
        <Navbar />
        <div className="min-h-screen w-full ">

        <div className="">
            <img className="h-96 w-full" src="cover-image-2.png"/>
            <div className="grid justify-items-start px-5 m-3 w-1/2">
                <h1 className="text-6xl font-bold text-white">Demon slayer</h1>
                <div className=" flex justify-between mt-3 mb-3 w-full">
                    <h3 className="text-xl text-zinc-400">1 temporada</h3>
                    <h1 className="text-xl text-zinc-400">20 Episódio</h1>
                </div>
                <h1 className="text-1sxl text-white my-2">
                    Integer vestibulum massa non justo consectetur commodo. Morbi eleifend volutpat diam. 
                    Quisque fermentum lacinia mollis. Vivamus ac consectetur nisl, eget facilisis odio. Donec vel ornare enim. 
                    Phasellus ut tinciduada. Quisqu leo a tempor. 
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </h1>
                    <div className=" flex justify-start w-full">
                    <button  id="first_name" 
                        className="bg-red-600 mt-2
                        text-gray-900 text-lg rounded-lg  font-medium
                        focus:ring-blue-500 focus:border-blue-500 block w-1/3
                        p-2.5  dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            Assistir
                    </button>
                    <button  id="first_name" 
                        className="bg-red-300 mt-2 mx-3 flex justify-center align-items-center
                        text-gray-900 text-lg rounded-lg  font-medium
                        focus:ring-blue-500 focus:border-blue-500 block w-1/3
                        p-2.5  dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            
                            <img className="mx-3" src="https://img.icons8.com/external-line-adri-ansyah/25/000000/external-interface-basic-ui-line-adri-ansyah-3.png"/>
                            Random
                    </button>
                    </div>
            </div>
        </div>

        </div>
     </>
    )
}

export default Random

