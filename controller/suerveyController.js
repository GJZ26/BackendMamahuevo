import { Op } from "sequelize";
import SurveyModel from "../models/surveyModel.js";


export async function create(req,res) {
    const {zone, description, evidence, warnCode, additionalInfo} = req.body

    SurveyModel({
        zone,description,evidence,warnCode,additionalInfo
    }).save().then((dat) => {
        res.json({result: dat})
    })

}

export async function getAll(req, res) {
    const surveys = await SurveyModel.find()
    res.status(200).json(surveys)
}
