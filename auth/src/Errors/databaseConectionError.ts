import { CustomError } from "./customError";

export class DatabaseConnectionError extends CustomError {
    statusCode = 500
    reason = 'Error connceting to database'
    constructor(){
        super('Error connceting to database')

        Object.setPrototypeOf(this,DatabaseConnectionError.prototype)
    }

    serializeErrors(){
        return [
            {
                message: this.reason
            }
        ]
    }
}