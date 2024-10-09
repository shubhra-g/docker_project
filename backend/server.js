import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'

dotenv.config()
import cors from 'cors'
import morgan from 'morgan'
import dbConnect from './config/dbConnect.js'
import userRouter from './routes/usersRoutes.js'
import authRouter from './routes/authRoutes.js'


//Starting Express app
const app = express()



//using Morgan for logging
app.use(morgan('dev'))
//Using Cors
app.use(cors({
    origin: 'http://localhost:3000', // Your frontend URL
    credentials: true, // Allow credentials (optional)
}));
app.use(express.json({limit: "50mb"}))



//Specifying Routes

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

app.get('/', (req, res) => {
    res.send('Hello World! Connected to Backend')
})









const start = async(PORT) => {

    try {
        await dbConnect()

        app.listen(PORT, (err) => {
            if (err) {
                throw err
            }
            console.log(`Server started on port ${PORT}`.green.bold.underline)
        })
    } catch(err) {
        console.log(err)
    }

}

const PORT = process.env.PORT || 5000
start(PORT)