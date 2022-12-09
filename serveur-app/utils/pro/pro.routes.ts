//import client from "./controllers/client.controller.mjs";
import ProController from "./pro.controller";
import { Router } from "express";

const routerPro = Router();
const proCtl = new ProController();

routerPro.get("/getAllPro", proCtl.getAllPro); // récupération d'un pro
routerPro.post("/getProById/", proCtl.getProById); // récupération d'un pro
//routerPro.get("/getProById/:pro_id", proCtl.getProById); // récupération d'un pro
routerPro.post("/update/", proCtl.getProById); // Modification informations d'un pro
routerPro.delete("/delete/:pro_id", proCtl.getProById); // Suppression d'un pro

// get location 

export { routerPro };
