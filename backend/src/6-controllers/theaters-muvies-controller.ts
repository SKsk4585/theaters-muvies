import  express, { NextFunction, Request, Response } from "express"
import theatersMuviesLogic from "../5-logic/theaters-muvies-logic"



const router = express.Router()
//get all theaters
router.get("/theaters",async(request:Request, response:Response, next: NextFunction)=>{
    try {
        const theater =  await theatersMuviesLogic.getAllTheaters()
        response.json(theater)
        
    } 
    catch (error) {
        next(error)
        
    }
})

//get all muvies by theaters id
router.get("/muvies/:theatersId",async(request:Request, response:Response, next: NextFunction)=>{
    try {
        const theatersId = +request.params.theatersId
        const muvies =  await theatersMuviesLogic.getAllMuviesByTheaters(theatersId)
        response.json(muvies)
        
    } 
    catch (error) {
        next(error)
        
    }
})

export default router