import { Request,Response, NextFunction } from "express";

export const errorHnadler = (err: Error,req: Request,res: Response,next: NextFunction) => {
    //console.log('Somting went wrong', err);
    res.status(400).send({
        message: err.message
    })
}