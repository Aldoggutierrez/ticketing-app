import express, { Router } from "express";

const router = express.Router()

router.post('/api/users/singout',(req,res) => {
    req.session = null
    res.send({})
})

export { router as singoutRouter }