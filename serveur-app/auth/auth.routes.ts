import { Router } from "express";
import AuthController from "./auth.controller";

const router = Router();
const authCtl = new AuthController();

router.post("/connect", authCtl.connect);

export default router;
