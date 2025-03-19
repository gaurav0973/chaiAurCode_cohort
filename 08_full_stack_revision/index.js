import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import db from "./utils/db.js"
//import routes
import userRoutes from "./routes/user.route.js"
dotenv.config()
const port = process.env.PORT || 4000
const app = express()

// moddleware
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin : "http://localhost:5173"
}))

// database
db()


// routes
app.use("/api/v1/users", userRoutes)



app.listen(port, ()=>{
    console.log("Backend server listning at PORT : ", port); 
})

