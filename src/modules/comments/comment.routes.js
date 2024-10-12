import { Router } from "express"
const router = Router()

import * as commentController from './comment.controller.js'
router.post('/addComment',commentController.addComment)
router.get('/getComment',commentController.getComments)
export default router;