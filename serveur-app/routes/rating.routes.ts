//import client from "./controllers/client.controller.mjs";
import RatingController from "../controller/rating/RatingController";
import { Router } from 'express';

const routerRating = Router();
const ratingCtl = new RatingController();

routerRating.post('/sendRate/', ratingCtl.sendRate);
//routerRating.get('/bestRate/', ratingCtl.getBestRate);
routerRating.get('/rateByPro/', ratingCtl.getRateByPro); 
//routerRating.delete('/deleteRate/:id', ratingCtl.deleteRate);

export { routerRating };