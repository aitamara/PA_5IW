import PropositionsController from "./propositions.controller";
import { Router } from "express";

const routerPropositons = Router();
const propositionsCtl = new PropositionsController();

routerPropositons.get("/proposition", propositionsCtl.getPropositions); //récupération des propositions de match

export { routerPropositons };
