import Controller from "../../controller/Controller";
import ClientModel from "../client/client.model";
import Client from "../entity/Client";
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
      let data = await this.passionMdl.getPassionsList();
      response.message = "Aucunes passions";
      response.error = data.success;
      if (data.success && data.data.length > 0) {
        response.message = `${data.data.length} passion(s) récupérée(s)`;
        response.error = false;
        response.data = data.data;
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
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };

    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [
        { label: "id_client", type: "number" },
        { label: "passions", type: "array" },
      ];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          let cltMdl = new ClientModel();
          let id_passions: Array<number> = [];
          let data = await this.passionMdl.getPassionsById(id_passions);

          if (data.success && data.data.length > 0) {
            let user = await cltMdl.getClientById(+req.body.id_client);
            if (user.data.length > 0 && user.data[0] instanceof Client) {
              data = await this.passionMdl.setPassionsListForClient(user.data[0], data.data);
            }
            response.message = data.message;
            response.error = false;
            response.data = data.data;
          } else {
            response.message = "Aucunes passions";
            response.error = data.success ?? true;
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
