import { Request, Response } from "express";
import Controller from "../../controller/Controller";
import QueryResponse from "../interfaces/query.interface";
import Verification from "../interfaces/verification.interface";
import ClientModel from "./client.model";
import ClientRegister from "../entity/ClientRegister";

export default class ClientController extends Controller {
  private mdl = new ClientModel();

  /**
   * Enregistrement d'un client
   *
   * @param req
   * @param res
   */
  public registerClient = async (req: Request, res: Response) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };

    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [
        { label: "lastname", type: "string" },
        { label: "firstname", type: "string" },
        { label: "photo", type: "string" },
        { label: "birthdate", type: "string" },
        { label: "address", type: "string" },
        { label: "city", type: "string" },
        { label: "zipcode", type: "string" },
        { label: "email", type: "string" },
        { label: "here_for", type: "string" },
        { label: "gender", type: "string" },
        { label: "intrested_by", type: "string" },
        { label: "password", type: "string" },
        { label: "phone", type: "string" },
      ];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          message = "Aucun client";
          let { lastname, firstname, photo, birthdate, phone, address, city, zipcode, gender, here_for, intrested_by, password } = req.body;
          let client = new ClientRegister(lastname, firstname, photo, birthdate, phone, address, city, zipcode, gender, here_for, intrested_by, password);
          let data = await this.mdl.registerClient(client);
          if (data.success && data.data.length > 0) {
            message = "Client crée";
            response.data.push(data.data);
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
   * Récupération d'un client par son id
   *
   * @param req
   * @param res
   */
  public getClientById = async (req: Request, res: Response) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };
    console.log("heeyyy");
    
    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [{ label: "id_client", type: "number" }];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          message = "Client inexistant";
          let data = await this.mdl.getClientById(+req.body.id_client);
          if (data.data.length > 0) {
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

  /**
   * Récupération des clients d'une zone géographique
   *
   * @param req
   * @param res
   */
  public getClientByZone = async (req: Request, res: Response) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };

    if (Object.keys(req.params).length > 0) {
      let dataIpt: Array<Verification> = [{ label: "id", type: "number" }];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          message = "Aucun client";
          let data = await this.mdl.getClientById(+req.params.client_id);
          if (data.success && data.data.length > 0) {
            message = "Client récupéré";
            response.data.push(data.data);
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
   * Modification d'un compte client
   *
   * @param req
   * @param res
   */
  public updateClientById = async (req: Request, res: Response) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };

    if (Object.keys(req.params).length > 0) {
      let dataIpt: Array<Verification> = [{ label: "id", type: "number" }];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          message = "Client inexistant";
          let data = await this.mdl.getClientById(+req.params.client_id);
          if (data.data.length > 0) {
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

  /**
   * Suppression d'un compte client
   *
   * @param req
   * @param res
   */
  public deleteClient = async (req: Request, res: Response) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };

    if (Object.keys(req.params).length > 0) {
      let dataIpt: Array<Verification> = [{ label: "id", type: "number" }];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          message = "Client inexistant";
          let data = await this.mdl.getClientById(+req.params.client_id);
          if (data.data.length > 0) {
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

  /**
   * Sauvegarde de la location d'un compte client
   *
   * @param req
   * @param res
   */
  public updateLocation = async (req: Request, res: Response) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };

    if (Object.keys(req.params).length > 0) {
      let dataIpt: Array<Verification> = [{ label: "id", type: "number" }];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          message = "Client inexistant";
          let data = await this.mdl.getClientById(req.body.client_id);
          if (data.data.length > 0) {
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
