import { CriptFunction } from "../../../Utils/criptFunction";

export class LoginUserUseCase{
    async handle(email:string,pass:string):Promise<boolean>{
        const criptFunction = new CriptFunction
        
        const isPassValid = criptFunction.ComparePass(email,pass)

        if(!isPassValid){
            throw new Error("senha invalida")
        }

        return isPassValid
    }
}