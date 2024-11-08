import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"})) //config for json data
app.use(express.urlencoded({extended:true,limit:"16kb"})) //config for url data
app.use(express.static("public"))
app.use(express.cookieParser())


export {app}