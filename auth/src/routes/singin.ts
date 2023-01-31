import { Router, Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../middlewares/vallidateRequest";
import { User } from "../models/user";
import { BadRequestError } from "../Errors/badRequestError";
import { Password } from "../services/password";
import jwt from 'jsonwebtoken'

const router = Router()

router.post('/api/users/singin',[
    body('email').isEmail().withMessage('Email mut be valid'),
    body('password').trim().notEmpty().withMessage('You most supply a password')
],
validateRequest
,async (req: Request,res: Response) => {
    const { email, password } = req.body

    const existingUser = await User.findOne({ email })
    if (!existingUser) {
        throw new BadRequestError('Ivalid Credentials')
    }
    const passwordMath = await Password.compare(existingUser.password,password)
    if (!passwordMath) {
        throw new BadRequestError('Ivalid Credentials');
    }

    const userJwt = jwt.sign({
        id: existingUser.id,
        email: existingUser.email
    }, process.env.JWT_KEY!)

    req.session = {
        jwt: userJwt
    }

    res.status(200).send(existingUser)
})

export { router as singinRouter }