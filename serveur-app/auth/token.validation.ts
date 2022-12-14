import jwt from "jsonwebtoken";

export default class Authentication {
  static TOKEN = process.env.TOKEN || "TEST_TOKEN";
  /* static client: ClientAuth; */

  static auth = (data: Object) => {
    /* this.client = client; */
    return jwt.sign(data, Authentication.TOKEN, { expiresIn: "1d" });
  };
}
