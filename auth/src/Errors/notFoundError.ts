import { CustomError } from "./customError";

export class NoftFoundError extends CustomError{
    statusCode = 404;
    constructor(){
        super('Route not found')

        Object.setPrototypeOf(this,NoftFoundError.prototype)
    }
    serializeErrors(){
        return [{ message: 'Not Found' }]
    }

}