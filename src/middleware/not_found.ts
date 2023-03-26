import { Request,Response,Application } from "express";
export const notFound = (req:Request,res:Response)=>res.status(404).send(' The route you are looking for does not exist');