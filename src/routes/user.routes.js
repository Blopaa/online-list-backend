import {Router} from "express"
import * as UserCtrl from '../controllers/User.controller'
const router = Router()

router.get('/users', UserCtrl.getUsers)
router.post('/signin',UserCtrl.signIn)
router.post('/signup',UserCtrl.signUp)


export default router