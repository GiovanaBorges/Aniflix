interface Props{
    text:string,
    type:string
}

export function Button(props:Props){
    return (
        <>
             <button  id="first_name" 
             className="bg-red-600 hover:bg-red-500 text-white font-bold text-lg py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded ">
                {props.text}
             </button>
        </>
    )
}