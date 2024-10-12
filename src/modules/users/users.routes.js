import { Router } from "express"
const router = Router()
import * as userController from './users.controller.js'

//router.post('/register',userController.addUser)
//router.get('/getUser', userController.getUserByEmail)
//router.get('/getUserComment',userController.getUserComment)
router.post('/addUser',userController.addUser)
router.get('/list',userController.list)
router.delete('/deleteUser',userController.deleteUser)
router.put('/updateUser',userController.updateUser)
router.post('/signUp',userController.signUP)
router.post('/login',userController.login)
export default router