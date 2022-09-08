//import client from "./controllers/client.controller.mjs";
import ProController from "./pro.controller";
import { Router } from "express";

const routerClient = Router();
const proCtl = new ProController();

routerClient.get("/getProById/:pro_id", proCtl.getProById); // récupération d'un pro
routerClient.post("/update/", proCtl.getProById); // Modification informations d'un pro
routerClient.delete("/delete/:pro_id", proCtl.getProById); // Suppression d'un pro

export { routerClient };
