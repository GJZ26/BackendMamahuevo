import { Op } from "sequelize";
import UserModel from "../models/userModel.js";

export async function login (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (username === undefined || password === undefined) {
        res.json({ status: false, message: "No username or password given" })
        return
    }

    const amount = await UserModel.count({
        where: {
            [Op.and]: [
                { name: username },
                { password: password }
            ]
        }
    })

    if (amount > 0) {
        res.json({ status: true, data: { name: username } });
        return;
    }

    res.json({ status: false, message: "No coincide ninguna cuenta" })

}

export const register = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === undefined || password === undefined) {
        res.json({ status: false, message: "No username or password given" })
        return
    }

    const amount = await UserModel.count({
        where: {
            name: username
        }
    })


    if (amount > 0) {
        res.json({ status: false, message: "Name is already taken" });
        return
    }

    UserModel({
        name: username,
        password: password
    }).save().then((dat) => {
        res.json({ status: true, data: { name: username } })
    })
}