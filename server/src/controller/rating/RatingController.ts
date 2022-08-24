import Controller from "../Controller";
import RateModel from "../../model/rating/RatingModel";

export default class RatingController extends Controller {
    /**
     * Envoi d'une note
     */
    sendRate = async (req, res) => {
    }

    /**
     * Récupération des notes/avis sur un pro
     */
    getRateByPro = async (req, res) => {
        let response = await RateModel.getRateByPro(req.body.pro_id);
        console.log("hey");
        console.log(req.body.pro_id);
        res.json(response);
    }
    
    /**
     * Récupération des meilleurs otes/avis sur un pro
     */
    getBestRatedPro = async (req, res) => {

    }
}