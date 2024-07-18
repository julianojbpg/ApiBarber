import express from 'express'
import { json } from 'express'
import router from './Routes'

const app = express()

app.use(json())
app.use("/api",router)

app.listen(3000, ()=>{
    console.log('rodando')
})