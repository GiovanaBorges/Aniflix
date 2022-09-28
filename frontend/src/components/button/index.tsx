interface Props{
    text:string,
    type:string
}

export function Button(props:Props){
    return (
        <>
             <button  id="first_name" 
             className="bg-red-600 mt-2
              text-gray-900 text-lg rounded-lg  font-medium
             focus:ring-blue-500 focus:border-blue-500 block w-3/6 mx-auto
             p-2.5  dark:border-gray-600 dark:placeholder-gray-400 
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {props.text}
             </button>
        </>
    )
}