import { DataTypes, Model } from "sequelize";
import connection from "../connections/connection.js";

class UserModel extends Model{}

UserModel.init({
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