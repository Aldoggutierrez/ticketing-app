import express from "express";
import { json } from "body-parser";
import { currentUserRouter } from "./routes/currentuser";
import { singinRouter } from "./routes/singin";
import { singoutRouter } from "./routes/singout";
import { singupRouter } from "./routes/singup";

const app = express()
app.use(json()) 

app.use(currentUserRouter)
app.use(singinRouter)
app.use(singoutRouter)
app.use(singupRouter)

app.listen(3000,() =>{
    console.log('Listening on port 3000');
})