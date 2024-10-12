import Product from '../../../DB/models/product.model.js';
import { dbConnection } from '../../../DB/connection.orm.js';
import User from '../../../DB/models/user.model.js';


export const createProduct = async( req,res)=> {
    const { title, price, UserId} = req.body
    try {
        const product = await Product.create({
            title,
            price,
            UserId
        })
        res.json({message: 'product created'})
    } catch (error) {
       console.log(error)
        res.json({message:'internal server error'})
    }
} 

export const getAllProducts = async (req, res)=> {
    try{
        const products = await Product.findAll({
            include: [{ model:User, attributes:["name","email"], where:{id:2}}]
        })
        res.json({products})
    } catch(error) {
        console.log(error)
        res.json("internal server error")
    }
}