import { Router } from "express";
import { getRoomItem, getRoomList, postCreateRoom } from "../controllers/roomsControllers.js";

const router = Router();

router.get("/", getRoomList);
router.get("/list", getRoomList);
router.get("/:id", getRoomItem)
router.post("/create", postCreateRoom);

export default router;