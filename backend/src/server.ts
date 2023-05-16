require("dotenv").config()
import cors from 'cors';
import express from "express"
const app = express()
import {routes} from "./routes"

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(8085,()=>{
    console.log("server listening")
})