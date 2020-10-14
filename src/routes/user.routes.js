import {Router} from "express"
import * as UserCtrl from '../controllers/User.controller'
import { verifyToken } from "../middlewares/verifyToken"
const router = Router()

router.get('/users', UserCtrl.getUsers)
router.post('/signin',UserCtrl.signIn)
router.post('/signup',UserCtrl.signUp)
router.get('/:userE', verifyToken, UserCtrl.getUserList)
router.get('/info/:userId', verifyToken, UserCtrl.getUser)


export default router