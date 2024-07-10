import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"

dotenv.config();

const app=express()
const port = process.env.PORT || 3001;
const databaseURL="1"+process.env.DATABASE_URL;

const server = app.listen(port,()=>{
    console.log(`shrey is runing on port ${PORT}`)
})

mongoose.connect(databaseURL)
.then(()=>{console.log(`DB connected Successful.`)})
.catch((e)=>console.log(e.message))