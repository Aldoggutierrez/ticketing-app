import express, { Router } from "express";

const router = express.Router()

router.post('/api/users/singin',(req,res) => {
    res.send('Hi There')
})

export { router as singinRouter }