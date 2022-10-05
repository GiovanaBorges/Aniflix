import { Button } from "../button"

export interface Props{
    titulo:string,
    descricao:string,
    studio:string,
    qtdTemporada?:number,
    qtdEp?:number
}

export function Card(props:Props){
    return(
        <>
        <div className="min-w-5/12 min-h-72 p-3">
            <img className="object-cover w-full max-h-44 mb-3" src="./nflixCover.png" alt=""/>
            <h3 className=" text-white font-bold text-2xl">{props.titulo}</h3>
            <div className="flex justify-between w-full mt-3 mb-3">
                    <h3 className="text-zinc-400 font-bold ">{props.qtdEp} {props.qtdEp == 1 ? 'Episódio' : 'Episódios'}</h3>
                    <h3 className="text-zinc-400 font-bold">{props.qtdTemporada} Temporada</h3>
            </div>
            <h4 className="text-white break-all">{props.descricao}</h4>
            <h3 className="text-zinc-400 mt-3">Studio: {props.studio}</h3>
            <div className="flex w-full ">
                <Button text="Assistir" type="submit"/>
            </div>
        </div>
        </>
    )
}