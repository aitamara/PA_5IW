import CommunityController from "./community.controller";
import { Router } from "express";

const routerCommunity = Router();
const communityCtl = new CommunityController();

routerCommunity.get("/getCommunitys", communityCtl.getAllCommunities); //récupération des communautés
routerCommunity.get("/getCommunityByClientId", communityCtl.getCommunityByClientId); //récupération des communautés d'un client
routerCommunity.post("/getCommunitiyMembers", communityCtl.getCommunitiyMembers); //récupération des membres d'une communauté
routerCommunity.post("/addClientToCommunity", communityCtl.addClientToCommunity); //ajout d'un client à une communauté
routerCommunity.post("/leaveCommunity", communityCtl.leaveCommunity); //client quitte une communauté
routerCommunity.post("/fireClientFromCommunity", communityCtl.fireClientFromCommunity); //retirer client d'une communauté

// getCommunityByProId
export { routerCommunity };
