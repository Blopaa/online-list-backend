import {Router} from "express"
import * as UserCtrl from '../controllers/User.controller'
import { verifyToken } from "../middlewares/verifyToken"
const router = Router()

router.get('/users', verifyToken, UserCtrl.getUsers)
router.post('/signin',UserCtrl.signIn)
router.post('/signup',UserCtrl.signUp)
router.get('/', verifyToken, UserCtrl.getUserList)


export default router