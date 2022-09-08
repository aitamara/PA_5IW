import { Request, Response } from "express";
import Controller from "../../controller/Controller";
import QueryResponse from "../interfaces/query.interface";
import Verification from "../interfaces/verification.interface";
import CommunityModel from "./community.model";

export default class CommunityController extends Controller {
  private cltMdl = new CommunityModel();

  /**
   * Récupération des clients d'une communauté
   *
   * @param req
   * @param res
   */
  public getCommunitiyMembers = async (req: Request, res: Response) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };

    if (Object.keys(req.params).length > 0) {
      let dataIpt: Array<Verification> = [{ label: "id_community", type: "number" }];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          message = "Aucun client";
          let data: Client[] = await this.cltMdl.getCommunitiyMembers(+req.params.id_community);
          if (data.length > 0) {
            message = "Client récupéré";
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
}
