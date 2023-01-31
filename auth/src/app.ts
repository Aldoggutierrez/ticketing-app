import express from "express";
import 'express-async-errors'
import { json } from "body-parser";
import { currentUserRouter } from "./routes/currentuser";
import { singinRouter } from "./routes/singin";
import { singoutRouter } from "./routes/singout";
import { singupRouter } from "./routes/singup";
import { errorHnadler } from "./middlewares/errorHandler";
import { NoftFoundError } from "./Errors/notFoundError";
import cookieSession from 'cookie-session'

const app = express()

app.set('trust proxy',true)

app.use(json()) 
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}))

app.use(currentUserRouter)
app.use(singinRouter)
app.use(singoutRouter)
app.use(singupRouter)
app.all('*', () => {
    throw new NoftFoundError()
})
app.use(errorHnadler)


export { app }