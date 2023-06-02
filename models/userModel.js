import { DataTypes, Model } from "sequelize";
import connection from "../connections/connection.js";
import surveyModel from "./surveyModel.js";

class UserModel extends Model{}

UserModel.init({
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'User'
}).sync()

export default UserModel;