import { Request, Response } from "express";
import Controller from "../../controller/Controller";
import ProModel from "./pro.model";
import QueryResponse from "../interfaces/query.interface";
import Verification from "../interfaces/verification.interface";

class ProController extends Controller {
  private mdl = new ProModel();

  /**
   * Récupération d'un client par son id
   *
   * @param req
   * @param res
   */
  getProById = async (req: Request, res: Response) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };

    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [{ label: "pro_id", type: "number" }];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          message = "Pro inexistant";
          let data = await this.mdl.getProById(+req.body.pro_id);
          if (data.data.length > 0) {
            message = "Pro récupéré";
            response.data.push(data);
          }
        } catch (error) {
          console.log(error);
          res.status(400).send(error);
        }
      }
    }
    res.status(code).send(response);
  };

  getAllPro = async (req, res) => {
    let response = await ProModel.getAllPro();
    res.json(response);
  };
}
export default ProController;
