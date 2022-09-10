import MatchController from "./match.controller";
import { Router } from "express";

const routerMatch = Router();
const matchCtl = new MatchController();

routerMatch.get("/match/:id", matchCtl.getMatchByClientId); //récupération match
routerMatch.post("/like", matchCtl.setLike); //ajout d'un like
routerMatch.post("/dislike", matchCtl.authenticate); //ajout d'un dislike

export { routerMatch };
