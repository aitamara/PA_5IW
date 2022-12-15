import ChatConvController from "./chatConv.controller";
import { Router } from "express";

const routerConv = Router();
const convCtr = new ChatConvController();

routerConv.post("/update", convCtr.updateConvStatus); //bloquer une conv

export { routerConv };
