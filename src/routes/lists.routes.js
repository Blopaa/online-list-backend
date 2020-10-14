import { Router } from "express";
const router = Router();
import * as ListCtrl from "../controllers/List.controller";
import { verifyToken } from "../middlewares/verifyToken";

router.get("/", verifyToken, ListCtrl.getLists);
router.post("/", verifyToken, ListCtrl.createList);
router.put("/:listId", verifyToken, ListCtrl.updateListById);
router.delete("/:listId", verifyToken, ListCtrl.deleteListById);

export default router;
