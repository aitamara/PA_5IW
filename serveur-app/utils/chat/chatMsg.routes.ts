import ChatMsgCtrl from "./ChatMsgController";
import { Router } from "express";

const routerMsg = Router();

routerMsg.get("/list/", ChatMsgCtrl.getMsg);
routerMsg.get("/list/user", ChatMsgCtrl.getMsgUser);
routerMsg.post("/send/", ChatMsgCtrl.sendMsg);

export { routerMsg };
