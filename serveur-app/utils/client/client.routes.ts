//import client from "./controllers/client.controller.mjs";
import ClientController from "./client.controller";
import { Router } from "express";

const routerClient = Router();
const clientCtl = new ClientController();

routerClient.post("/authenticate", clientCtl.authenticate); //authentification d'un client
routerClient.post("/getClientById/:client_id", clientCtl.getClientById); //récupération d'un client
routerClient.post("/register", clientCtl.registerClient); //enregistrement d'un compte client
routerClient.post("/update", clientCtl.registerClient); //modification d'un compte client
routerClient.delete("/delete", clientCtl.registerClient); //suppression d'un compte client
routerClient.post("/location", clientCtl.updateLocation); //enregistrement position d'un client

export { routerClient };
