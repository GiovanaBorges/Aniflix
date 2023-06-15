import  bcrypt  from "bcryptjs";
import { prisma } from "../prisma/client";

export class CriptFunction{
    CriptPass(pass:string):string{
        //generate Salt
        const salt = bcrypt.genSaltSync(10);
        //cript pass
        const hash = bcrypt.hashSync(pass,salt)
        
        return hash
    }

    async ComparePass(email:string,pass:string):Promise<boolean>{
        const userFoundDb = await prisma.user.findUnique({
            where:{
                email : email
            }
        })

        if(!userFoundDb){
            return false
        }

        const isPassMatch = bcrypt.compareSync(pass,userFoundDb?.password)

        if(isPassMatch){
            return true
        }else{
            return false
        }
    }
}