import RatingController from "./rating.controller";
import { Router } from "express";

const routerRating = Router();
const ratingCtl = new RatingController();

/* routerRating.get("/getRate/:id", ratingCtl.deleteRate); // récupérer les notes d'un pro */
routerRating.post("/sendRate/", ratingCtl.sendRate); // ajouter une note à un pro
routerRating.delete("/deleteRate/:id", ratingCtl.deleteRate); // supprimer une note d'un pro

export { routerRating };
