interface Props{
    text:string
}

export function Input(props:Props){
    return (
        <>
             <input type="text" id="first_name" 
             className="bg-zinc-500 
             border-gray-300 text-zinc-200 text-lg rounded-lg my-3
             focus:ring-blue-500 focus:border-blue-500 block w-3/4 mx-auto
             p-2.5 dark:border-gray-600 dark:placeholder-zinc-200 h-16
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.text} required></input>
        </>
    )
}