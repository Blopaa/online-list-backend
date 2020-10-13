import {Router} from "express"
const router = Router()
import * as ListCtrl from '../controllers/List.controller'

router.get('/', ListCtrl.getLists)
router.post('/', ListCtrl.createList)
router.put('/:listId', ListCtrl.updateListById)
router.delete('/:listId', ListCtrl.deleteListById)

export default router