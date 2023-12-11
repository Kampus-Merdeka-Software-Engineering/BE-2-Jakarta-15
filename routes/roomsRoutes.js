import { Router } from "express";
import { getRoomList, postCreateRoom } from "../controllers/roomsControllers.js";

const router = Router();

router.get("/list", getRoomList);
router.post("/create", postCreateRoom);

export default router;