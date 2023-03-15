import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import connectDb from "./mongodb/connect.js"
import postRoutes from "./routes/postRoutes.js"
import larexaiRoutes from "./routes/larexaiRoutes.js"


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json({limit : "50mb"}))
app.use("/api/v1/posts", postRoutes)
app.use("/api/v1/larexai", larexaiRoutes)
app.get("/", async(req, res) => {
   res.send("Hello server")
})



const startServer = async() => {
   try{
      connectDb(process.env.MONGODB_URL)
      app.listen("8080", console.log("Listening at port http://localhost:8080"))
   }catch(err){
      console.log(err)
   }
}



startServer()