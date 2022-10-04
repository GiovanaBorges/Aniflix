import {Input}  from "../../components/input"
import {Button} from "../../components/button"

function Login(){
    return(
        <>
                
            <div className="text-white mx-auto">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
               
                    
                        <form className="flex flex-col bg-zinc-900 h-full justify-center justify-items-center">
                        <h1 className="mx-auto w-3/4 sm:text-5xl lg:text-6xl md:text-6xl font-light mb-3">Olá novamente</h1>
                            {
                                //<input className="focus:shadow-sm w-full focus:outline-none text-slate-400 placeholder-slate-400 rounded-md y-2 pl-10 p-3 w-3/4 mx-auto my-3 bg-zinc-900"  type="email" aria-label="Email" placeholder="Email"/>
                                //<input className="focus:shadow-sm w-full focus:outline-none text-slate-400 placeholder-slate-400 rounded-md y-2 pl-10 p-3  my-3 bg-zinc-900" type="password" aria-label="Password" placeholder="Senha"/>
                            }
                            <div className="my-4">
                                <Input text="Email"/>
                                <Input text="Password"/>
                            </div>
                            <a className="mx-auto w-3/4 text-end my-4 text-lg text-red-500 hover:text-white " href="/">Esqueci minha senha</a>  
                            <Button type="submit" text="Login"/>
                            <a className="mx-auto w-3/4 mt-5 text-lg " href="/">Não tenho conta <span className="text-red-600 hover:text-white">Criar.</span> </a>  
                        </form>
                    
                    
                            <img className="" src="./nflixCover.png" alt="" />
                    
                    </div>
            </div>
        </>
    )
}
export default Login