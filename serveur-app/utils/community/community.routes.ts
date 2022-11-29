import CommunityController from "./community.controller";
import { Router } from "express";

const routerCommunity = Router();
const communityCtl = new CommunityController();

routerCommunity.get("/getCommunitys", communityCtl.getCommunity); //récupération des communautés
routerCommunity.get("/getCommunityByClientId", communityCtl.getCommunityByClientId); //récupération des communautés d'un client
routerCommunity.get("/getCommunitiyMembers", communityCtl.getCommunitiyMembers); //récupération des membres d'une communauté
routerCommunity.post("/addClientToCommunity", communityCtl.addClientToCommunity); //ajout d'un client à une communauté
routerCommunity.post("/leaveCommunity", communityCtl.leaveCommunity); //client quitte une communauté

// getCommunityByProId
export { routerCommunity };
