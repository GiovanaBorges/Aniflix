import {Input}  from "../../components/input"
import {Button} from "../../components/button"
import {ButtonGoogle} from "../../components/button-google"

function SignUp(){
    return(
        <>
                
            <div className="text-white mx-auto">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
               
                    
                        <form className="flex flex-col bg-zinc-900 h-full justify-center justify-items-center">
                        <h1 className="mx-auto w-3/4 sm:text-5xl lg:text-6xl md:text-6xl font-light mb-3">Welcome</h1>
                            {
                                //<input className="focus:shadow-sm w-full focus:outline-none text-slate-400 placeholder-slate-400 rounded-md y-2 pl-10 p-3 w-3/4 mx-auto my-3 bg-zinc-900"  type="email" aria-label="Email" placeholder="Email"/>
                                //<input className="focus:shadow-sm w-full focus:outline-none text-slate-400 placeholder-slate-400 rounded-md y-2 pl-10 p-3  my-3 bg-zinc-900" type="password" aria-label="Password" placeholder="Senha"/>
                            }
                            <div className="my-4">
                                <Input text="Full name"/>
                                <Input text="Email"/>
                                <Input text="Password"/>
                                <Input text="Confirm Password"/>
                            </div>
                            <a className="mx-auto w-3/4 text-end my-4 text-lg text-red-500 hover:text-white " href="/">I forget my password</a>  
                            <div className="flex justify-center w-full">
                                <Button type="submit" text="Sign Up"/>

                            </div>
                            <ButtonGoogle type="text" text="Continue with Google"/>
                            <a className="mx-auto w-3/4 mt-5 text-lg " href="/signin">I have an account <span className="text-red-600 hover:text-white">Sign In.</span> </a>  
                        </form>
                    
                    
                            <img className="" src="./nflixCover.png" alt="" />
                    
                    </div>
            </div>
        </>
    )
}
export default SignUp