import PassionsController from "./passions.controller";
import { Router } from "express";

const routerPassions = Router();
const passionsCtl = new PassionsController();

routerPassions.get("/getPassionsList", passionsCtl.getPassionsList); //récupérer l'enesmble des passions
routerPassions.post("/getPassionByName/:passion_name", passionsCtl.updatePassionClient); //modifier une ou plusieur passions d'un client

export { routerPassions };
