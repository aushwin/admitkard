import express from 'express'
import cors from 'cors'
import { dbConnect } from './app/utils/db.mjs'
import userRouter from './app/routes/user.router.mjs'
const port = process.env.PORT || 1000
const {json} = express

const app = express()
app.use(json());   
app.use(cors())

app.get('/',(req,res)=>{
    res.json({
        "message": `weclome to the server running at port ${port}`
    })
})

app.use('/users',userRouter)

dbConnect()
    .then(()=>{
        console.log('db connected')
        app.listen(port,()=>{
            console.log(`server starting at ${port}`)
        })
    })
    .catch((err)=>console.log(err))

