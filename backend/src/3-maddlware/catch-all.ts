import { Request, Response } from "express";



function catchAll(err:any, request:Request,response:Response,next:NewableFunction){
    console.log (err)
    response.status(err.status || 500).send(err.msg)
    
}

export default catchAll