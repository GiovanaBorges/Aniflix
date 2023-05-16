import {useState} from "react"
import { Button } from "../../components/button";
import { Navbar } from "../../components/navbar";
import {Props} from "../../components/card"

export default function Random(){
    
    return(
        <>
        <Navbar />
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 text-white w-4/5 mx-auto pt-3">              
                        <form className="flex flex-col bg-zinc-900 h-3/5 justify-center justify-items-center h-4/5">
                        <h1 className="mx-auto w-3/4 sm:text-5xl lg:text-6xl md:text-6xl font-light mb-3">O cao da sua mae</h1>
                        <div className="flex justify-around w-3/4   mt-3 mb-3">
                            <h3 className="text-zinc-400 font-bold ">1 Temporada</h3>
                            <h3 className="text-zinc-400 font-bold"> 20 Episodios</h3>
                        </div>
                        <p className="mx-auto w-3/4 mt-5 text-lg " >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit donec morbi vulputate molestie. Vitae interdum ac mi et congue cras tortor pellentesque pulvinar. Sem in eget hendrerit sed. Non amet, eget nunc, fermentum risus congue massa, in.</p>  
                            <h3 className="my-4 w-3/4 mx-auto text-zinc-400 font-bold ">Studio : Cuuuu</h3>
                            
                            <div className="flex justify-center w-full  ">
                                <Button text="Assistir" type="submit"/>
                                <button  id="first_name" 
                                className="flex justify-around 
                                bg-fuchsia-700 ml-5 hover:bg-fuchsia-600
                                border-b-4 border-fuchsia-800 hover:border-fuchsia-500
                                py-2 px-4 border-b-4 text-lg
                                    focus:ring-blue-500 focus:border-blue-500 block w-auto rounded">
                                             <img 
                                                src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/E74C3C/external-the-square-box-with-a-shuffle-loop-arrows-for-the-music-playback-music-regular-tal-revivo.png"
                                                className="mx-3"/> Random
                                             
                                </button>
                            </div>
                            
                        
                        </form>
                    
                    
                            <img className="h-4/5" src="./image-cover-1.png" alt="" />
                    
                    </div>
            
        </>
    )
}