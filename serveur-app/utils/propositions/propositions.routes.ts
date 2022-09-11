import PropositionsController from "./propositions.controller";
import { Router } from "express";

const routerMatch = Router();
const propositionsCtl = new PropositionsController();

routerMatch.get("/proposition", propositionsCtl.getPropositions); //récupération des propositions de match

export { routerMatch };
