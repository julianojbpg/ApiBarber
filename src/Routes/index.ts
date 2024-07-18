import { Router , Response, Request} from "express";
import { SignIn } from "../Controller/LoginController";


const router = Router()

router.get("/account",SignIn);





export default router