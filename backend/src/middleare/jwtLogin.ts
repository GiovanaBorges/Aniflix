import jwt, {Secret} from "jsonwebtoken"
import {Request,Response,NextFunction } from "express"

const secretKey:Secret = 'testeasdk';

interface AuthenticateRequest extends Request{
    user?: any
}

export class JwtLogin{
    createJwtToken(email:string,req:Request,res:Response,next:NextFunction){
    
        const payload = {email:email}

        try{
            //generate token jwt
            const token = jwt.sign(payload,secretKey)
            console.log(token + "seu token ai ")
            next()
           
        }catch(E){
            //res.send(500).json(Error)
            throw new Error("Error ao create account")
        }
    }

   async AuthenticateToken(req:AuthenticateRequest,res:Response,next:NextFunction){
        let token = req.headers.authorization? req.headers.authorization.split(" ")[1] : "peido"
        console.log(token?.split(" ")[1]);

        if(token){
            jwt.verify(token,secretKey, (err,decoded:any) =>{
                if(err){
                    res.status(403).json({error: `Invalid Token ${err}`})
                }

                    const email = decoded.email;
                    req.user = decoded
                    console.log(decoded)
                    
                    next()
            })
         
        }else{
            res.status(401).json({ error: 'The token is required' });
            return false
        }

    }

}