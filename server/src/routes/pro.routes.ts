//import client from "./controllers/client.controller.mjs";
import ProController from "../controller/pro/ProController";
import { Router } from "express";

const routerClient = Router();

const proCtl = new ProController();

//routerClient.get('/clientById/:client_id', client.getClientById);
routerClient.post("/getProById/:pro_id", proCtl.getProById);
//routerClient.post('/register', client.registerClient);
/***
 * Routes
 * register pro
 * pro by id
 */
routerClient.get("/getProById/:pro_id", proCtl.getProById);

export { routerClient };
