import {useState} from "react"
import { Button } from "../../components/button";
import { useLocation } from 'react-router-dom'

export interface Props{
    titulo?:string,
    descricao?:string,
    studio?:string,
    qtdTemporada?:number,
    qtdEp?:number
}



export default function MovieInfoPage(){
    const location = useLocation()
    const { title,descr,studio,tempqtd,epqtd,linkImage,coverImage} = location.state
    return(
        <>
                <div className=" text-white ">              
                <img className="w-4/5 mx-auto" src={coverImage} alt="" />
                        <form className="flex flex-col bg-zinc-900 justify-center justify-items-center w-4/5 mx-auto pb-3.5">
                        <h1 className="mx-auto w-3/4 sm:text-5xl lg:text-6xl md:text-6xl font-light mb-3 pt-3.5">{title}</h1>
                        <div className="flex justify-around w-3/4   mt-3 mb-3">
                            <h3 className="text-zinc-400 font-bold ">{tempqtd > 1?(`${tempqtd} Temporadas`) : (`${tempqtd} Temporada`)} </h3>
                            <h3 className="text-zinc-400 font-bold">{epqtd > 1?(`${epqtd} Episódios`) : (`${epqtd} Episódio`)}</h3>
                        </div>
                        <p className="mx-auto w-3/4 mt-5 text-lg " >{descr}</p>  
                            <h3 className="my-4 w-3/4 mx-auto text-zinc-400 font-bold ">Estudio : {studio}</h3>
                            
                            <div className="mx-auto flex w-3/4">
                                <Button text="Assistir" type="submit"/>
                               
                            </div>
                            
                        
                        </form>
                    
                    
                            
                    
                    </div>
            
        </>
    )
}