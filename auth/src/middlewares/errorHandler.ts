import { Request,Response, NextFunction } from "express";
import { DatabaseConnectionError } from "../errors/databaseConnectionError";
import { RequestValidationError } from "../errors/requestValidationError";

export const errorHnadler = (err: Error,req: Request,res: Response,next: NextFunction) => {
    if (err instanceof RequestValidationError) {
        console.log('handling this as a request validation error');
    }
    
    if (err instanceof DatabaseConnectionError) {
        console.log('handling this as a database connection error');
    }

    res.status(400).send({
        message: err.message
    })
}