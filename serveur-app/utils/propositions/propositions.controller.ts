import { Request, Response } from "express";
import Controller from "../../controller/Controller";
import PropositionsModel from "./propositions.model";
import QueryResponse from "../interfaces/query.interface";

export default class MatchController extends Controller {
    private mdl = new PropositionsModel();

    /**
   * Récupération des propositions de matchs
   *
   * @param req
   * @param res
   */
  public getPropositions = async (req: Request, res: Response) => {
    let code = 400;
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };

    try {
        let propositions = await this.mdl.getPropositions(req.body.client, req.body.pro);
    }
    catch(error) {
        console.log(error);
        res.status(400).send(error);
    }    
    res.status(code).send(response);
  };
}