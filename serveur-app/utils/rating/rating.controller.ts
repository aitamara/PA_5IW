import Controller from "../../controller/Controller";
import QueryResponse from "../interfaces/query.interface";
import Verification from "../interfaces/verification.interface";
import Pro from "../entity/Pro";
import Rating from "../entity/Rating";
import RateModel from "./rating.model";
import ProModel from "../pro/pro.model";
import Client from "../entity/Client";
import ClientModel from "../client/client.model";

export default class RatingController extends Controller {
  private mdl = new RateModel();
  /**
   * Envoi d'une note
   */
  sendRate = async (req, res) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };

    if (Object.keys(req.params).length > 0) {
      let dataIpt: Array<Verification> = [
        { label: "mark", type: "number" },
        { label: "text", type: "text" },
        { label: "pro_id", type: "number" },
        { label: "client_id", type: "number" },
      ];
      let listError = this.verifSecure(dataIpt, req.body);
      let { mark, text, pro_id, client_id } = req.body;

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          let mdl2 = new ProModel();
          let mdl3 = new ClientModel();
          //1. vérifier data
          let data: {};
          let pro: Pro;
          let client: Client;
          let rate;
          try {
            await Promise.all([
              //2. récupérer pro
              mdl2.getProById(pro_id).catch((error) => {
                res.status(400).send(error);
              }),
              //3. récuperer client
              mdl3.getClientById(client_id).catch((error) => {
                res.status(400).send(error);
              }),
            ]).then((res) => {
              if (res[0]?.data[0]) pro = res[0]?.data[0];
              if (res[1]?.data[0]) client = res[1]?.data[0];
              rate = new Rating(mark, text, pro, client);
            });

            if (rate instanceof Rating) {
              code = 200;
              data = await this.mdl.sendRate(rate);
              if (data) {
                message = "Avis créé";
                response.data.push(data);
              }
            }
          } catch (error) {
            res.status(400).send(error);
          }
        } catch (error) {
          res.status(400).send(error);
        }
      }
    }
    res.status(code).send(response);
  };

  /**
   * Supprimer une note
   *
   * @param req
   * @param res
   */
  deleteRate = async (req, res) => {
    let code = 400;
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };

    if (Object.keys(req.params).length > 0) {
      let dataIpt: Array<Verification> = [{ label: "rate_id", type: "number" }];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          let data = await this.mdl.getRates(req.body.rate_id);
          if (data.data.length > 0 && data.success) {
            code = 200;
            let { mark, text, pro_id, client_id } = data.data[0];
            let rate = new Rating(mark, text, pro_id, client_id);
            response.message = "Impossible de supprimer l'avis";
            data = await this.mdl.deleteRate(rate);
            if (data.success) {
              response.message = "Avis supprimé";
              response.error = false;
            }
          } else {
            response.message = data.message;
          }
        } catch (error) {
          res.status(400).send(error);
        }
      }
    }
    res.status(code).send(response);
  };
}
