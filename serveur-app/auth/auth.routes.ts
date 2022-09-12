import { Router } from "express";
import AuthController from "./auth.controller";

const router = Router();
const authCtl = new AuthController();

router.post("/connect", authCtl.connect);
router.post("/disconnect", authCtl.disconnect);

export default router;
