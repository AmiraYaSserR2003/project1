import { sequelize } from "../connection.orm.js";
import { DataTypes } from "sequelize";

const User = sequelize.define('User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        gender: {
            type:DataTypes.ENUM('female','male'),
            defaultValue:'female'
        }

    },
    {
        timestamps:true,
    }

)

console.log(sequelize.models.User); 
export default User