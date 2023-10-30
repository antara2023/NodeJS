import express from "express";
import UserRouter from './routes/user.route.js'
import loggerMiddleware from "./middleware/logger.js";
import connetDB from "./database/mongoDB.js";

const app = express()

app.use(express.json()) 
app.use(loggerMiddleware)

app.use('/api/user', UserRouter)

app.all('*', (req,res)=>{
    res.status(200).send('default message')
})

app.listen(5015, async()=>{
    await connetDB()
    console.log('server is running at 5015')
})
