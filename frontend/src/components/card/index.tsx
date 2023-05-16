import { Button } from "../button"
import {Link, Route, Routes} from 'react-router-dom';

export interface Props{
    titulo:string,
    descricao:string,
    studio:string,
    qtdTemporada?:number,
    qtdEp?:number,
    linkImage?:string,
    coverImage?:string
}

export function Card(props:Props){
    return(
        <>
        <div className="min-w-5/12 min-h-72 p-3">
            <img className="object-cover w-full min-h-2/5 h-2/5 mb-3" src={props.linkImage} alt=""/>
            <h3 className=" text-white font-bold text-2xl">{props.titulo}</h3>
            <div className="flex justify-between w-full mt-3 mb-3">
                    <h3 className="text-zinc-400 font-bold ">{props.qtdEp} {props.qtdEp == 1 ? 'Episódio' : 'Episódios'}</h3>
                    <h3 className="text-zinc-400 font-bold">{props.qtdTemporada} Temporada</h3>
            </div>
            <h4 className="text-white break-all">{props.descricao}</h4>
            <h3 className="text-zinc-400 mt-3 my-3">Studio: {props.studio}</h3>
            <div className="flex w-full ">
            <Link to="/infoMovie" state={ {"title":props.titulo,
                "descr":props.descricao,
                "studio":props.studio,
                "tempqtd":props.qtdTemporada,
                "epqtd":props.qtdEp,
                "coverImage":props.coverImage
                }}>
                <Button text="Assistir" type="submit" />
            </Link>
                
                
            </div>
        </div>
        </>
    )
}