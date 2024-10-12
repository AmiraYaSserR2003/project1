import express from 'express'
//import db_connection from './DB/models/connection.js'
import userRouter from './src/modules/users/users.routes.js'
import productRouter from './src/modules/products/product.routes.js'
import commentRouter from './src/modules/comments/comment.routes.js'

//import testConnection from './DB/models/connection.orm.js'
import { dbConnection } from './DB/connection.orm.js'
import User from './DB/models/user.model.js'
import Object from './DB/models/object.model.js'
import Product from './DB/models/product.model.js'
//import { addUser } from './src/modules/users/users.controller.js'
const app = express()

app.use(express.json())
app.use('/user',userRouter)
app.use('/product',productRouter)
app.use('/comment', commentRouter)

const port = 8080

dbConnection();
// connection DataBase 
// db_connection.connect((err)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     console.log("connected to database")
// })
app.get('/', (req,res)=>(
   res.send('hello word ')
))
// app.post('/addUser',addUser)
app.listen(port, ()=>(
   console.log('server running on 8080')
))