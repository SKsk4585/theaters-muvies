import  express, { NextFunction, Request, Response } from "express"
import theatersMuviesLogic from "../5-logic/theaters-muvies-logic"
import MuviesModel from "../4-models/muvies-model"



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

//add muvie
router.post("/muvies",async(request:Request, response:Response, next: NextFunction)=>{
    try {
        const muvie = new MuviesModel(request.body) 
        const added =  await theatersMuviesLogic.addMuvies(muvie)
        response.status(201).json(added)
        
    } 
    catch (error) {
        next(error)        
    }
})

//delete muvie
router.delete("/muvies/:muvieId",async(request:Request, response:Response, next: NextFunction)=>{
    try {
        const muvieId = +request.params.muvieId
         await theatersMuviesLogic.deleteMuvie(muvieId)
        response.sendStatus(204)
        
    } 
    catch (error) {
        next(error)        
    }
})

export default router