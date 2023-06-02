import { DataTypes, Model } from "sequelize";
import connection from "../connections/connection.js";
import UserModel from "./userModel.js";

class surveyModel extends Model { }

surveyModel.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
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
    },
    userId: {
        type: DataTypes.BIGINT,
        references: {
            model: UserModel,
            key: "id"
        }
    }
}, {
    sequelize: connection,
    modelName: 'Survey'
}).sync()

export default surveyModel;
