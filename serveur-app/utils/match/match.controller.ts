import { Request, Response } from "express";
import Controller from "../../controller/Controller";
import ClientModel from "../client/client.model";
import Client from "../entity/Client";
import QueryResponse from "../interfaces/query.interface";
import Verification from "../interfaces/verification.interface";
import MatchModel from "./match.model";
import { Gender } from "../../constants/Gender";
import { Here } from "../../constants/Here";
import ChatConvModel from "../conv/chatConv.model";

export default class MatchController extends Controller {
  private mdl = new MatchModel();
  private mdlConv = new ChatConvModel();

  /**
   * Récupération des communautés d'un membres
   *
   * @param req
   * @param res
   */
  public getMatchByClientId = async (req: Request, res: Response) => {
    let code = 400;
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };

    if (Object.keys(req.params).length > 0) {
      let dataIpt: Array<Verification> = [{ label: "client_id", type: "number" }];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          response.message = "Aucun match trouvés";
          let data;
          let cltMdl = new ClientModel();
          let user = await cltMdl.getClientById(+req.body.client_id);
          if (user.data.length > 0 && user.data[0] instanceof Client) {
            data = await this.mdl.getMatchByClientId(user.data[0]);
          }
          if (data.success) {
            if (data.data.length > 0) {
              response.data.push(data);
              response.message = "Match récupérés";
            }
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
   * Ajout d'un like
   *
   * @param req
   * @param res
   */
   public setLike = async (req: Request, res: Response) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };

    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [
        { label: "pro_id", type: "number" },
        { label: "client_id_liked", type: "number" },
      ];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          //let user: Client = req.session.user;
          let client_moi : Client;
          client_moi = new Client(22, "Bupont", "mat", "", new Date, "", "", "", "", Gender.FEM, Here.ALL, Gender.FEM);
          let match = await this.mdl.getMatchBy2ClientIdsAndProId(client_moi.getId, req.body.client_id_liked, req.body.pro_id); //remplacer client_moi par user en prod
          
          if(match.data.length == 0) {
            let createMatch = await this.mdl.createMatch(client_moi.getId, req.body.client_id_liked, req.body.pro_id); //remplacer client_moi par user en prod
            response.data = createMatch.data;
            response.message = createMatch.message;
            response.error = !createMatch.success;
          }
          else {
            let like = await this.mdl.setLike(match.data[0]['id']); //remplacer client_moi par user en prod
            response.data = like.data;
            response.message = like.message
            response.error = !like.success;

            let createChatConv = await this.mdlConv.createChatConv(match.data[0]['id']); 
          }        
        }
        catch (error){
          console.log(error);
          res.status(400).send(error);
        }
      }
    }
    res.status(code).send(response);
   };
  /*public setLike = async (req: Request, res: Response) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };

    if (Object.keys(req.params).length > 0) {
      let dataIpt: Array<Verification> = [
        { label: "id_client", type: "number" },
        { label: "id_client_liked", type: "number" },
      ];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          message = "Client inexistant";
          let data;
          let cltMdl = new ClientModel();
          let client: Client;
          let client_liked: Client;

          await Promise.all([
            //2. récupérer le client
            cltMdl.getClientById(+req.body.id_client).catch((error) => {
              res.status(400).send(error);
            }),
            //3. récuperer le client aimé
            cltMdl.getClientById(+req.body.id_client_liked).catch((error) => {
              res.status(400).send(error);
            }),
          ]).then((res) => {
            if (res[0]?.data[0]) {
              if (res[0].data.length > 0) client = res[0]?.data[0];
            }
            if (res[1]?.data[0]) {
              if (res[1].data.length > 0) client_liked = res[1]?.data[0];
            }
            //4. ajout du like
            data = this.mdl.setLike(client, client_liked);
          });

          if (data.data.length > 0) {
            message = "Like enregistré";
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
  */

  /**
   * Ajout d'un dislike
   *
   * @param req
   * @param res
   */
  public setDislike = async (req: Request, res: Response) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };

    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [
        { label: "pro_id", type: "number" },
        { label: "client_id_disliked", type: "number" },
      ];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          //let user: Client = req.session.user;
          let client_moi : Client;
          client_moi = new Client(18, "Bupont", "mat", "", new Date, "", "", "", "", Gender.FEM, Here.ALL, Gender.FEM);
          let match = await this.mdl.getMatchBy2ClientIdsAndProId(client_moi.getId, req.body.client_id_disliked, req.body.pro_id); //remplacer client_moi par user en prod
          if(match.data.length == 0) {
            let createMatch = await this.mdl.createMatch(client_moi.getId, req.body.client_id_disliked, req.body.pro_id); //remplacer client_moi par user en prod
            response.data = createMatch.data;
            response.message = createMatch.message;
            response.error = !createMatch.success;
          }
          else {
            let dislike = await this.mdl.setDislike(match.data[0]['id']); //remplacer client_moi par user en prod
            response.data = dislike.data;
            response.message = dislike.message
            response.error = !dislike.success;
          }                   
          code = 200;          
        }
        catch (error){
          console.log(error);
          res.status(400).send(error);
        }
      }
    }
    res.status(code).send(response);
   };
}
