import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import db from "./utils/db.js"




const app = express()




app.use(cors({
    origin : process.env.BASE_URL,
    credentials : true,
    methods : ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders : ['Content-Type', 'Authorisation'],
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const port = process.env.PORT || 5000




app.get("/", (request, response)=>{
    response.send("Kya haal hai bhai")
})
app.get("/gaurav", (request, response)=>{
    response.send("I am in  Train")
})


// connect to db
db()



app.listen(port, () => {
    console.log(`I am working from train ${port}`)
})