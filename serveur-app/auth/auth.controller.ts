import { Request, Response } from "express";
import QueryResponse from "../utils/interfaces/query.interface";
import Verification from "../utils/interfaces/verification.interface";
import ClientMdl from "../utils/client/client.model";
import Client from "../utils/entity/Client";
import Authentication from "./token.validation";
import ClassCtrl from "../controller/Controller";
import bcrypt from "bcrypt";

export default class AuthController extends ClassCtrl {
  connect = async (req: Request, res: Response) => {
    let code = 404;
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };
    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [
        { label: "mail", type: "string" },
        { label: "password", type: "string" },
      ];
      let listError = this.verifSecure(dataIpt, req.body);

      //Vérification si des erreurs ont été trouvée précédement
      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          let { mail, password } = req.body;
          let data = await ClientMdl.queryGetUserByMail(mail);
          let message: string = "Client inexistant";
          if (data instanceof Client) {
            message = "Mot de passe incorrect";
            if (await bcrypt.compare(password, data.getPassword)) {
              message = "Impossible de se connecter";
              try {
                let user = data.userWithoutPwd();
                data = await ClientMdl.queryConnectUser(data);
                if (data instanceof Client) {
                  message = "Client connecté";
                  response.error = false;
                  response.data.push({ token: Authentication.auth({ mail: mail }) }, user);
                  code = 200;
                }
              } catch (error) {
                console.log(error);
              }
            }
          }
          response.message = message;
        } catch (error) {
          console.log(error);
          res.status(400).send(error);
        }
      }
      res.status(code).send(response);
    }
  };

  disconnect = async (req: Request, res: Response) => {
    let code = 400;
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };
    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [
        { label: "mail", type: "string" },
        { label: "role", type: "string" },
      ];
      let listError = this.verifSecure(dataIpt, req.body);

      //Vérification si des erreurs ont été trouvée précédement
      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          let { mail, role } = req.body;
          let data = await ClientMdl.queryGetUserByRole(mail, role);
          let message: string = "Client inexistant";
          if (data instanceof Client) {
            try {
              data = await ClientMdl.queryDisconnectUser(data);
              if (data instanceof Client) {
                message = "Client déconnecté";
                response.error = false;
              }
            } catch (error) {
              console.log(error);
            }
          }
          response.message = message;
          response.data = [];
          code = 200;
        } catch (error) {
          console.log(error);
          res.status(400).send(error);
        }
      }
      res.status(code).send(response);
    } else {
      res.status(code).send(response);
    }
  };
}
