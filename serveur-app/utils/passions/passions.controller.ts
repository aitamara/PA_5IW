import Controller from "../../controller/Controller";
import Passion from "../entity/Passion";
import PassionsModel from "./passions.model";

export default class PassionsController extends Controller {
  private passionMdl = new PassionsModel();

  /**
   * Récupération de la liste complète des passions
   * @param req
   * @param res
   */
  getPassionsList = async (req, res) => {
    try {
      let data: Array<Passion> = await this.passionMdl.getPassionsList();
      let message: string = "Aucunes passions";
      let error: boolean = true;
      if (data.length > 0) {
        message = `${data.length} passion(s) récupérée(s)`;
        error = false;
      }
      let response: QueryResponse = { error: error, message: message, data: data };
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };

  /**
   * Ajout d'une ou plusieurs passion(s) pour un client
   *
   * @param req
   * @param res
   */
  updatePassionClient = async (req, res) => {
    //const response = await PassionsModel.getPassionbyName(req.params.passion_name ?? "")
    //res.json(response);
  };
}
