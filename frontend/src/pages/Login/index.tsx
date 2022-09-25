
function Login(){
    return(
        <>
                
            <div className="text-white mx-auto">
                <div className="grid grid-cols-2 ">
               
                    
                        <form className="flex flex-col bg-gray-900 h-full justify-center justify-items-center">
                        <h1 className="mx-auto w-3/4 text-6xl font-light mb-3">Login</h1>
                            <input className="focus:shadow-sm w-full focus:outline-none text-slate-400 placeholder-slate-400 rounded-md y-2 pl-10 p-3 w-3/4 mx-auto my-3 bg-zinc-900"  type="email" aria-label="Email" placeholder="Email"/>
                            <input className="focus:shadow-sm w-full focus:outline-none text-slate-400 placeholder-slate-400 rounded-md y-2 pl-10 p-3 w-3/4 mx-auto my-3 bg-zinc-900" type="password" aria-label="Password" placeholder="Senha"/>
                            
                            <button className="m-4 p-3 w-3/4 border-solid border-2 border-zinc-800 mx-auto my-3 hover:border-stone-700 rounded-md text-3lg">Logar</button>

                            <a className="mx-auto w-3/4 text-end mt-3 text-red-500 " href="/">Esqueci minha senha</a>  
                            <a className="mx-auto w-3/4 mt-3 text-lg" href="/">Não tenho conta <span className="text-sky-500">Criar.</span> </a>  
                        </form>
                    
                    <div className="w-full h-screen ">
                        
                        
                    </div>
                    </div>
            </div>
        </>
    )
}
export default Login