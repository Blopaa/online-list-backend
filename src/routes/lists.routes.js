import { Router } from "express";
const router = Router();
import * as ListCtrl from "../controllers/List.controller";
import { verifyToken } from "../middlewares/verifyToken";

router.get("/", verifyToken, ListCtrl.getLists);
router.get('/:listId', verifyToken, ListCtrl.getListById);
router.put('/product/:listId', ListCtrl.deleteProduct);
router.post("/", verifyToken, ListCtrl.createList);
router.put("/:listId", verifyToken, ListCtrl.updateListById);
router.delete("/:listId", verifyToken, ListCtrl.deleteListById);
router.put("/addproduct/:listId", verifyToken, ListCtrl.addProduct)
router.put("adduser/:userEmail/:listId", verifyToken, ListCtrl.addUserList);

export default router;
