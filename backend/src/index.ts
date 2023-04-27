import express, { Router } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import IndexRouter from './routes/index.router'

const app = express() 
const router = Router() ;
app.use(bodyParser.json())
app.use(cors())
app.use('/',( new IndexRouter(router) ).router)
app.get('/',(req,res)=>{

    return res.status(200).json({
        message :'okk'
    })
})



app.listen(3000,()=>[
    console.log("server started on port 3000")
])