import express from "express";
import QueryResponse from "../utils/interfaces/query.interface";
import Verification from "../utils/interfaces/verification.interface";
import UserMdl from "../utils/user/user.model";
import Authentication from "./token.validation";
import ClassCtrl from "../controller/Controller";
import UserAuth from "../utils/entity/UserAuth";

export default class AuthController extends ClassCtrl {
  /**
   * Connexion d'un utilisateur
   *
   * @param req
   * @param res
   */
  public connect = async (req, res) => {
    let code = 404;
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };
    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [
        { label: "email", type: "string" },
        { label: "password", type: "string" },
        { label: "role", type: "string" },
      ];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          let { email, password, role } = req.body;
          let userAuth = new UserAuth(email, password, role);
          let mdl = new UserMdl();
          let message: string = "Mot de passe incorrect";
          let data = await mdl.authenticate(userAuth);

          if (data.success && data.data[0]) {
            message = "Impossible de se connecter";
            try {
              let user = data.data[0];
              message = "Client connecté";
              req.session = user;
              response.error = false;
              response.data.push({ token: Authentication.auth({ email: email }) }, user);
              code = 200;
            } catch (error) {
              console.log(error);
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
}
