import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user',userRoutes)

app.listen(3535, () => {
    console.log("server listening on: http://localhost:3535/")
})