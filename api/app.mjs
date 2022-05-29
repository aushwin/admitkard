import express from 'express'
import cors from 'cors'
const {json} = express

const app = express()
app.use( json() );   
app.use(cors())   

app.post('/',(req,res)=>{
    console.log(req.body)
})

app.listen(4000,()=>{
    console.log('server starting ')
})