import { Request, Response } from "express";
import Controller from "../../controller/Controller";
import ClientModel from "../client/client.model";
import Client from "../entity/Client";
import Community from "../entity/Community";
import QueryResponse from "../interfaces/query.interface";
import Verification from "../interfaces/verification.interface";
import CommunityModel from "./community.model";

export default class CommunityController extends Controller {
  private mdl = new CommunityModel();

  /**
   * Récupération de la liste complète des communautés
   *
   * @param req
   * @param res
   */
  getCommunity = async (req, res) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };
    try {
      let passions: Array<Community> = [];
      let data = await this.mdl.getCommunity();
      response.message = "Aucunes communautés";
      response.error = data.success;
      if (data.data.length > 0) {
        passions.push(data.data);
        response.message = `${passions.length} communauté(s) trouvée(s)`;
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
   * Récupération des communautés d'un membres
   *
   * @param req
   * @param res
   */
  public getCommunityByClientId = async (req: Request, res: Response) => {
    let code = 400;
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };

    if (Object.keys(req.params).length > 0) {
      let dataIpt: Array<Verification> = [{ label: "id_client", type: "number" }];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          response.message = "Aucun membres";
          let data;
          let cltMdl = new ClientModel();
          let user = await cltMdl.getClientById(+req.body.id_client);
          if (user.data.length > 0 && user.data[0] instanceof Client) {
            data = await this.mdl.getCommunityByClientId(+req.params.id_community);
          }
          if (data.success) {
            if (data.data.length > 0) {
              response.message = "Membres récupérés";
            }
            response.data.push(data);
          }
          response.error = data.success;
        } catch (error) {
          console.log(error);
          res.status(400).send(error);
        }
      }
    }
    res.status(code).send(response);
  };

  /**
   * Récupération des membres d'une communauté
   *
   * @param req
   * @param res
   */
  public getCommunitiyMembers = async (req: Request, res: Response) => {
    let code = 400;
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };

    if (Object.keys(req.params).length > 0) {
      let dataIpt: Array<Verification> = [{ label: "id_community", type: "number" }];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          response.message = "Aucun membres";
          let data = await this.mdl.getCommunitiyMembers(+req.params.id_community);
          if (data.success) {
            if (data.data.length > 0) {
              response.message = "Membres récupérés";
            }
            response.data.push(data);
          }
          response.error = data.success;
        } catch (error) {
          console.log(error);
          res.status(400).send(error);
        }
      }
    }
    res.status(code).send(response);
  };
}