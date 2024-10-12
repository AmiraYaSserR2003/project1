import { sequelize } from "../connection.orm.js";
import { DataTypes } from "sequelize";

const Object = sequelize.define('Object',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        title: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }

    },
    {
        timestamps:true,
    }

)

console.log(sequelize.models.Object); 
export default Object