import { Router } from "express";
import * as productController from './product.controller.js' 
const router = Router();

router.post('/create',productController.createProduct)
router.get('/getAllProducts',productController.getAllProducts)



export default router