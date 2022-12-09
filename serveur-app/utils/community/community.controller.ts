import { Request, Response } from "express";
import Authentication from "../../auth/token.validation";
import Controller from "../../controller/Controller";
import ClientModel from "../client/client.model";
import ProModel from "../pro/pro.model";
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
  public getAllCommunities = async (req, res) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };
    try {
      let passions: Array<Community> = [];
      let data = await this.mdl.getAllCommunities();
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
  public getCommunityByClientId = async (req, res) => {
    let code = 400;
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };

    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [{ label: "client_id", type: "number" }];      
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
          let user = await cltMdl.getClientById(+req.body.client_id);
          if (user.data.length > 0 && user.data[0] instanceof Client) {
            data = await this.mdl.getCommunityByClientId(+req.body.client_id);
          }
          if (data.success) {
            if (data.data.length > 0) {
              response.message = "Communauté(s) récupéré(s)";
              let mdlPro = new ProModel();
              for (let i = 0; i < data.data.length; i++) {
                let user = await mdlPro.getProById(+data.data[i].pro_id);
                data.data[i].proname = user.data[0].proname;        
              }
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
   public getCommunitiyMembers = async (req, res) => {
    let code = 400;
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };

    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [{ label: "pro_id", type: "number" }];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          let cltMdl = new ClientModel();
          response.message = "Aucun membres";
          let data = await this.mdl.getCommunitiyMembers(+req.body.pro_id);
          if (data.success) {
            if (data.data.length > 0) {
              response.message = "Membres récupérés";
              for (let i = 0; i < data.data.length; i++) {
                let user = await cltMdl.getClientById(+data.data[i].client_id);
                data.data[i].client = user.data[0];   
              }
            }
            response.data.push(data.data);
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
   * Ajout d'un client à une communauté
   *
   * @param req
   * @param res
   */
  public addClientToCommunity = async (req, res) => {
    let code = 400;
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };

    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [
        { label: "client_id", type: "number" },
        { label: "pro_id", type: "number" },
      ];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } 
      else {
        try {
          let checkIfAlreadyMember: any = await this.mdl.getClientAlredyMemberOfCommunity(+req.body.client_id, req.body.pro_id);
          
          if (checkIfAlreadyMember.data.length == 0){
            let data = await this.mdl.addClientToCommunity(+req.body.pro_id, req.body.client_id);
            response.data.push(data);
            code = 200;
            response.message = data.message;
          }
          else {
            response.message = "Membre existant";
          }
          response.error = false;
        } catch (error) {
          console.log(error);
          res.status(400).send(error);
        }
      }
    }
    res.status(code).send(response);
  };

  /**
   * Un client quitte une communauté
   *
   * @param req
   * @param res
   */
  public leaveCommunity = async (req, res) => {
    let code = 400;
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };

    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [
        { label: "community_id", type: "number" }
      ];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          response.message = "...";
          let data = await this.mdl.leaveCommunity(+req.body.community_id);

          if (data.success) {
            response.error = !data.success;
            response.message = data.message;
            response.data.push(data);
          } else {
            response.error = true;
            response.message = "hekkkiiii"
          }
        } catch (error) {
          console.log(error);
          res.status(400).send(error);
        }
      }
    }
    res.status(code).send(response);
  };

  /**
   * Retirer client d'une communauté
   *
   * @param req
   * @param res
   */
  public fireClientFromCommunity = async (req, res) => {
    let code = 400;
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };

    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [
        { label: "community_id", type: "number" }
      ];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          let data = await this.mdl.fireClient(+req.body.community_id);

          if (data.success) {
            response.error = !data.success;
            response.message = data.message;
            response.data.push(data);
          } else {
            response.error = true;
            response.message = data.message;
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
