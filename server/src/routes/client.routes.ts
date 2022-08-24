//import client from "./controllers/client.controller.mjs";
import ClientController from "../controller/client/ClientController";

import { Router } from 'express';
const routerClient = Router();

const clientCtl = new ClientController();

//routerClient.get('/clientById/:client_id', client.getClientById);
routerClient.post('/getClientById/:client_id', clientCtl.getClientById);
//routerClient.post('/register', client.registerClient);

export { routerClient };