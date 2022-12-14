import { Request, Response } from "express";
import Controller from "../../controller/Controller";
import PropositionsModel from "./propositions.model";
import QueryResponse from "../interfaces/query.interface";
import Verification from "../interfaces/verification.interface";
import Client from "../entity/Client";
import ClientModel from "../client/client.model";
import { Gender } from "../../constants/Gender";
import { Here } from "../../constants/Here";

export default class MatchController extends Controller {
    private mdl = new PropositionsModel();
    private mdlClt = new ClientModel();

    /**
   * Récupération des propositions de matchs
   *
   * @param req
   * @param res
   */
  public getPropositions = async (req, res) => {
    let code = 400;
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };

    let dataIpt: Array<Verification> = [{ label: "pro_id", type: "number" }];
    let listError = this.verifSecure(dataIpt, req.body);
    let client_moi : Client;
    client_moi = new Client(100, "Bupont", "mat", "", new Date, "", "", "", "", Gender.FEM, Here.ALL, Gender.FEM);
    if (listError.length > 0) {
      response.message = "Erreur";
      response.data.push(listError);
    } else {
      try {
        let cltMdl = new ClientModel();
        let user: Client = req.session.user;
        let propositions = await this.mdl.getPropositions(client_moi, req.body.pro_id); //remplacer client_moi par user en prod
        code = 200;
        response.data = propositions.data;
        response.message = propositions.message
      }
      catch(error) {
          console.log(error);
          res.status(400).send(error);
      } 
    }   
    res.status(code).send(response);
  };
}