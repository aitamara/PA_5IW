import MatchController from "./match.controller";
import { Router } from "express";

const routerMatch = Router();
const matchCtl = new MatchController();

routerMatch.get("/match/:id", matchCtl.getMatchByClientId); //récupération des match
routerMatch.post("/like", matchCtl.setLike); //ajout d'un like
routerMatch.post("/dislike", matchCtl.setDislike); //ajout d'un dislike

export { routerMatch };
