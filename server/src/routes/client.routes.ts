//import client from "./controllers/client.controller.mjs";
import ClientController from "../controller/client/ClientController";

import { Router } from 'express';
const routerClient = Router();

const clientCtl = new ClientController();

routerClient.post('/authenticate', clientCtl.authenticate);
routerClient.post('/getClientById/:client_id', clientCtl.getClientById);
routerClient.post('/register', clientCtl.registerClient);

export { routerClient };