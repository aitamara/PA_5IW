import PlacesController from "./places.controller";
import { Router } from "express";

const routerClient = Router();
const placesCtl = new PlacesController();

routerClient.post("/getPlaces", placesCtl.getPlacesList); //récupération places autour d'un champ géographique
routerClient.get("/getPlaceByProId/:pro_id", placesCtl.getPlaceByProId); //récupération places selon pro
routerClient.get("/getPlaceByName/:name", placesCtl.getPlaceByProId); //récupération places selon nom

export { routerClient };
