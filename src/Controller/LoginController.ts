import { Response , Request} from "express"
import { user } from "../entidades/Models/usuario"

export function SignIn(req:Request,res:Response):Response{
    
    return res.json(user)
}

