import express from "express";
import {getAll, create} from "../controller/suerveyController.js";

const suerveyRouter = express.Router();

suerveyRouter.get('/',getAll)
suerveyRouter.post('/', create)
export default suerveyRouter;
