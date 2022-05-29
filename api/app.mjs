import express from 'express'
import cors from 'cors'
import { dbConnect } from './app/utils/db.mjs'
import userRouter from './app/routes/user.router.mjs'
const {json} = express

const app = express()
app.use(json());   
app.use(cors())
app.use('/users',userRouter)

dbConnect()
    .then(()=>{
        console.log('db connected')
        app.listen(4000,()=>{
            console.log('server starting ')
        })
    })
    .catch((err)=>console.log(err))

