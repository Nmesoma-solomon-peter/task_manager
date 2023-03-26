import { ErrorRequestHandler,Request,Response,NextFunction } from "express"
export const errorHandler = (err:ErrorRequestHandler,req:Request,res:Response,next:NextFunction)=>{
return res.status(500).json({msg:err})
}