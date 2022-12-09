import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import TokenValidation from "../auth/token.validation";

const AUTH_ROUTES = ["/auth/connect", "/client/register"];

const authToken = (req: Request, res: Response, next: NextFunction) => {

  if (AUTH_ROUTES.some((r) => r == req.url)) {
    next();
    return;
  }
  
  // test le header avec bearer
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  if (!authHeader) return res.sendStatus(401);

  // test l'existance du token
  const token = authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  // test la validation du token
  jwt.verify(token, TokenValidation.TOKEN, (err: any, _: any) => {
    if (err) {
      console.log("ERR : authToken", err);
      return res.sendStatus(403);
    }
    next();
  });
};

export default authToken;
