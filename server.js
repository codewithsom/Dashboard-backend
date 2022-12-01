import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import courseRouter from './routes/courseRoute.js'
import testRouter from './routes/testRoute.js'
import userRoutes from './routes/userRoutes.js'



const app = express();

dotenv.config();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(helmet());


app.use('/tests',testRouter)
app.use('/courses',courseRouter)
app.use('/users',userRoutes)


const PORT = 7000

app.use('/',(req,res)=>{
    res.send(`Can't find ${req.originalUrl} on this server!`)
})


mongoose.connect('mongodb+srv://user:user1234@cluster0.oidzy5g.mongodb.net/dashboard-backend?retryWrites=true&w=majority')
.then(() => app.listen(PORT, () => console.log(`Connected to database and listening on ${PORT}`)))
.catch((err) => console.log(err));