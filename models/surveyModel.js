import { DataTypes, Model } from "sequelize";
import connection from "../connections/connection.js";
import userModel from "./userModel.js";
import UserModel from "./userModel.js";

class surveyModel extends Model { }

surveyModel.init({
    zone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    evidence: {
        type: DataTypes.STRING,
        allowNull: false
    },
    warnCode: {
        type: DataTypes.ENUM("red", "yellow", "green"),
        allowNull: false
    },
    aditionalInfo: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: connection,
    modelName: 'Survey'
}).sync()

export default surveyModel;
