import {useState} from "react"
import { Button } from "../../components/button";
import { Navbar } from "../../components/navbar";
import {Props} from "../../components/card"



export default function Random(Props:Props){
    
    return(
        <>
        <Navbar />
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 p-5 text-white">              
                        <form className="flex flex-col bg-zinc-900 h-3/5 justify-center justify-items-center p-5 h-4/5">
                        <h1 className="mx-auto w-3/4 sm:text-5xl lg:text-6xl md:text-6xl font-light mb-3">{Props.titulo}</h1>
                        <div className="flex justify-around w-3/4   mt-3 mb-3">
                            <h3 className="text-zinc-400 font-bold ">1 Temporada</h3>
                            <h3 className="text-zinc-400 font-bold"> 20 Episodios</h3>
                        </div>
                        <p className="mx-auto w-3/4 mt-5 text-lg " >{Props.descricao}</p>  
                            <h3 className="my-4 w-3/4 mx-auto text-zinc-400 font-bold ">{Props.studio}</h3>
                            
                            <div className="mx-auto flex w-3/4">
                                <Button text="Assistir" type="submit"/>
                                <button  id="first_name" 
                                className="flex justify-around bg-red-300 mt-2
                                    text-black text-lg rounded-lg  font-medium
                                    focus:ring-blue-500 focus:border-blue-500 block w-auto mx-auto
                                    p-2.5  dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                             <img 
                                                src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/E74C3C/external-the-square-box-with-a-shuffle-loop-arrows-for-the-music-playback-music-regular-tal-revivo.png"
                                                className="mx-3"/> Random
                                             
                                </button>
                            </div>
                            
                        
                        </form>
                    
                    
                            <img className="h-4/5 w-full" src="./image-cover-1.png" alt="" />
                    
                    </div>
            
        </>
    )
}