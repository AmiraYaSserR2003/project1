import { sequelize } from "../connection.orm.js";
import { DataTypes } from "sequelize";
import User from "./user.model.js";

const Product = sequelize.define('Product',
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
User.hasMany(Product)
Product.belongsTo(User)
console.log(sequelize.models.Product); 
export default Product