import Controller from "../../controller/Controller";
import ClientModel from "../client/client.model";
import Passion from "../entity/Passion";
import QueryResponse from "../interfaces/query.interface";
import Verification from "../interfaces/verification.interface";
import PassionsModel from "./passions.model";

export default class PassionsController extends Controller {
  private passionMdl = new PassionsModel();

  /**
   * Récupération de la liste complète des passions
   * @param req
   * @param res
   */
  getPassionsList = async (req, res) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };
    try {
      let passions: Array<Passion> = [];
      let data = await this.passionMdl.getPassionsList();
      response.message = "Aucunes passions";
      response.error = data.success ?? true;
      if (data.data.length > 0) {
        passions.push(data.data);
        response.message = `${passions.length} passion(s) récupérée(s)`;
        response.error = false;
        response.data = passions;
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
    res.status(code).send(response);
  };

  /**
   * Ajout d'une ou plusieurs passion(s) pour un client
   *
   * @param req
   * @param res
   */
  updatePassionClient = async (req, res) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };

    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [
        { label: "id_client", type: "number" },
        { label: "passions", type: "string" },
      ];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          let cltMdl = new ClientModel();
          let id_passions: Array<number> = [];
          let passions: Array<Passion> = [];
          let data = await this.passionMdl.getPassionsById(id_passions);
          response.message = "Aucunes passions";
          response.error = data.success ?? true;
          if (data.data.length > 0) {
            passions.push(data.data);
            let user = await cltMdl.getClientById(+req.params.client_id);
            data = await this.passionMdl.setPassionsListForClient(user, passions);
            response.error = false;
            response.data = passions;
          }
        } catch (error) {
          console.log(error);
          res.status(400).send(error);
        }
      }
    }
    res.status(code).send(response);
  };
}
