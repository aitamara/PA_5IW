import { Router } from "express";
import AuthController from "./auth.controller";

const router = Router();
const authCtl = new AuthController();

// Route endpoint definition
router.post("/connect", authCtl.connect);

export default router;
