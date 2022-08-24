import PlacesController from "../controller/places/PlacesController";
import { Router } from "express";

const routerClient = Router();

const placesCtl = new PlacesController();
routerClient.get("/getPassionsList", placesCtl.getPlacesList);
routerClient.get("/getPlaceByProId/:pro_id", placesCtl.getPlaceByProId);
routerClient.get("/getPlaceByProName/:pro_name", placesCtl.getPlaceByProName);
routerClient.get("/getPlaceByName/:place_name", placesCtl.getPlaceByName);

export { routerClient };
