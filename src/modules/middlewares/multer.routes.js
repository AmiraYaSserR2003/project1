import { Router } from "express";
import { multerMiddleware } from "./multer.middleware";
import router from "../users/users.routes";

router.get(
    multerMiddleware().single('image')
)


export default router