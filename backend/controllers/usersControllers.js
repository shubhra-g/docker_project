import Users from "../models/usersModel.js"
import asyncHandler from "express-async-handler"
import generateToken from "../utils/generateToken.js"
import { sendMail } from "../utils/SendEmail.js"
import randomstring from "randomstring";

const registerController = async (req, res) => {
    //console.log("hi")
    const { firstName, lastName, email, password, highestEducation } = req.body
   console.log(firstName,lastName,email,password,highestEducation)
    try {

        const userExists = await Users.findOne({ email })

        if (userExists) {
            res.status(400)
            throw new Error("User already exists")
        }

        const user = await Users.create({
            firstName,
            lastName,
            email,
            password,
            highestEducation
        })

        user.uniqueString = randomstring.generate(20)
        await user.save()

        //await sendMail(user.email, user.firstName, user.uniqueString)
        if (user) {
            

            res.status(201).json({
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                highestEducation: user.highestEducation,
            })
        } else {
            res.status(400).json({
                status: "failed",
                message: "Email Already Exist"
            })
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: error
        })
    }
}

const loginController = asyncHandler (async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await Users.findOne({ email })

        //if (user.isVerified === false){
        //    res.status(400)
        //    throw new Error("Please Verify Your Email To Continue Using Jobcy")
        //}

        if (user && (await user.matchPassword(password))) {
            res.json({
                status: "success",
                token: await generateToken(user._id),
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                highestEducation: user.highestEducation,
            })
        } else {
            throw new Error("Invalid email or password")

        }

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})





export { registerController, loginController }