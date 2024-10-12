//import db_connection from '../../../DB/connection.js'
import { dbConnection } from '../../../DB/connection.orm.js';
import User from '../../../DB/models/user.model.js';
import bcrypt, { hashSync, compareSync } from 'bcrypt'
import { Op } from 'sequelize';
/*
-Create
-bulkcreat // array of users
-findOrCreate  // using to add new row
*/

export const addUser = async(req,res,next)=>{
    const {name , email, password ,gender}= req.body
   // const newUser = await User.create({name , email, password ,gender})
  // const users = await User.bulkCreate(req.body)
  const users = await User.findOrCreate({
    where:{name},
    defaults:{name , email, password ,gender}
  })
  if(!users[1])
  {
    return res.json({message:'user already exists'})
}
    res.json({message:"user added successfully", users})
}


/*
finders
* findall
* findbypk
* findone
* findandcountall
* findorcreate
*/

export const list = async (req,res,next)=>{
    // return all users
  //  const users = await User.findAll()
    //const users = await User.findByPk(req.query.id)
    // const user = await User.findOne({
    //     where:{
    //         email: req.query.email
    //     }
    // })
    const users = await User.findAndCountAll({
        where:{
            gender:'male'
        }
    })
    res.json(users)
}

// delete user

export const deleteUser = async (req,res,next)=>{
    const data =await User.destroy({
        where:{
            gender:req.query.gender
        }
    })
    if(!data)
    {
        return res.json('user not found')
    }
    res.json({message:'user deleted successfully',data})
}


// update user

export const updateUser = async(req,res,next)=>{
    const{name , email} = req.body
    const{id}= req.query

    const data = await User.update(
        {
            name, email
        },
        {
            where:{
                id
            }
        }
    )
    if(!data[0])
    {
        return res.json('user not found')
    }
    res.json({message:"user updated", data})
}

// sign Up

export const signUP = async(req,res)=>{
    try{
    const{name, email, password, gender} = req.body
    const isEmailExist = await User.findOne({ where:{email}})

    if(isEmailExist)
    {
        return res.json({message:'email is already exists'})
    }
    const hashpass=hashSync(password,10)
    console.log(hashpass)
    const user = User.create({
    name,email, password: hashpass, gender
    })
    return res.json({message:"user created", user } )
}catch(error){
    console.log(error)
    res.json({nessege:'internal server error'})
}
}


export const login = async(req,res,next)=>{
    const {email , password } = req. body
    const isUserExists = await User.findOne({
        where: 
        {email}
    })
    if(!isUserExists)
    {
        return res.json({messege:"invalid credentials "})
    }
    const isPassMatch = compareSync(password, isUserExists.password)
    if(!isPassMatch)
    {
        return res.json({messege:"invalid credentials "})
    }
    return res.json({message:'login success', username: isUserExists.name})
}




// ====================== Add User===============

//import db_connection from "../../../DB/models/connection";

// export const addUser = async(req,res,next)=>{
//     const { name , email , pass , gender , adress } =req.body;

//     const insertQuery = 
//     `INSERT INTO users (name,email, pass,gender,adress)  VALUES ('${name}','${email}','${pass}','${gender}','${adress}')`


// // axios
//     const isUserExists = await axios.get('http://localhpst:3000/user/getUser?email= ${email}')
//     isUserExists(isUserExists.data.data)
//     {
//         return res.json({message:'email is already exist'})
//     }



//     db_connection.query(insertQuery,(err,result)=>{
//         if(err)
//         {
//             return res.json({message: "query error ", error: err.message})
//         }
//         if(!result.affectedRows){
//             return res.json({message:"user not added"})
//         }
//         return res.json({message:'user added your id is ${result.insertId'})
//     })

// }

// export const getUserByEmail = (req,res,next)=>{

// const {email} = req.body
// if(!email){
//    return res.json ({message:'email is required'})
// }
// const selectByEmail = "select * from users where email = '${email}'"

// db_connection.query(selectByEmail,(err,result)=>{
//     if(err){
//         return res.json({message: ' Query Error',error: err.message})
//     }
//     if(!result.length){
//         return res.json({message:'user not found'
//         })
//         return res.json({message:'userfound', data: result[0]})
//     }
// })
// }

// export const getUserComment = (req,res,next)=>{
//     const selectQuery =
//     `
//     SELECT * FROM users 
//     LEFT JOIN comments
//     on users.id = comments.addedBy
//     `
//     db_connection.execute(selectQuery,(err,result)=>{
//         if(err)
//         {
//             return res.json({messege: 'query error', error: err.message})
//         }
//         if(!result.length){
//             return res.json({messege: 'no comments found'})
//         }
//         return res.json({messege: 'comments fetched successfully ', data: result})
//     })
// }