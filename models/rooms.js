import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Rooms = sequelize.define("Rooms", {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    area: DataTypes.INTEGER,
    guest: DataTypes.INTEGER,
    bed: DataTypes.INTEGER,
    balcony: DataTypes.STRING,
    description: DataTypes.STRING,
});

export default Rooms;