import PassionsController from "../controller/passions/PassionsController";
import { Router } from "express";

const routerClient = Router();

const passionsCtl = new PassionsController();
routerClient.get("/getPassionsList", passionsCtl.getPassionsList);
routerClient.get("/getPassionById/:passion_id", passionsCtl.getPassionById);
routerClient.get("/getPassionByName/:passion_name", passionsCtl.getPassionByName);

export { routerClient };
