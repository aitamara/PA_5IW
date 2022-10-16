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
    let code = 500;
    let response: QueryResponse = { error: true, message: "Bad request", data: [] };
    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [
        { label: "email", type: "string" },
        { label: "password", type: "string" },
      ];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          let { email, password } = req.body;
          let userAuth = new UserAuth(email, password);
          let mdl = new UserMdl();
          let message: string = "Mot de passe incorrect";
          let data = await mdl.authenticate(userAuth);

          if (data.success && data.data[0]) {
            message = "Impossible de se connecter";
            try {
              let token = Authentication.auth({ email: email });
              let user = data.data;
              user[0].token = token;
              code = 200;
              message = "Client connecté";
              response.error = false;
              response.data = user;/*
              res.cookie(`tkn`, user[0].token, {
                maxAge: 3600 * 24 * 365,
                secure: true,
                httpOnly: true,
                sameSite: "lax",
              });*/
            } catch (error) {
              console.log(error);
            }
          }
          response.message = message;
        } catch (error) {
          res.status(400).send(error);
        }
      }
      res.status(code).send(response);
    }
  };

  public disconnect = (req, res) => {
    req.session = "";
  };
}
