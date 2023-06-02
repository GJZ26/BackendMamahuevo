import express from "express";
import bodyParser from "body-parser";
import suerveyRoutes from "./routes/suerveyRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import UserModel from "./models/userModel.js";
import surveyModel from "./models/surveyModel.js";

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', userRoutes)
app.use('/survey', suerveyRoutes)

app.listen(3535, () => {
    console.log("server listening on: http://localhost:3535/")
})
