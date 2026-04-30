import { database } from "../config/database.js";
import { DataTypes } from "sequelize";

const currency = database.define("currency",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    symbol: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default currency;