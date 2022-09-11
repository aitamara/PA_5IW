import { roles } from "serveur-app/constants/Roles";
import Model from "../../model/Model";
import Client from "../entity/Client";
import Pro from "../entity/Pro";
import UserAuth from "../entity/UserAuth";

export default class UserModel extends Model {
  private table: string = "user_auth";
  private table_client: string = "user_client";
  private table_pro: string = "user_pro";
  private model = new Model();

  /**
   *
   * @param userAuth
   * @returns
   */
  public authenticate = async (userAuth: UserAuth) => {
    try {
      let arrClient: Array<Object> = [];
      let user;
      let client_password = this.model.hashIt(userAuth.getPassword);
      let tableJ = this.table_client;
      if (userAuth.getRole == roles.PRO) tableJ = this.table_pro;
      let { rows } = await this.model.dbClient.query(
        `SELECT * FROM public.${this.table} as t1 INNER JOIN ${tableJ} as t2 ON t1.id = t2.user_id WHERE email = $1 AND password = $2`,
        [userAuth.getEmail, client_password]
      );
      if (rows.length > 0) {
        rows.forEach((e) => {
          if (e.role == roles.CLIENT) {
            user = new Client(e.id, e.lastname, e.firstname, e.photo, e.birthdate, e.phone, e.adress, e.city, e.zipcode, e.gender, e.here_for, e.intrested_by);
          } else if (e.role == roles.PRO) {
            user = new Pro(e.id, e.lastname, e.firstname, e.proname, e.photo, e.adress, e.city, e.zipcode, e.activated, e.coord_lat, e.coord_long);
          }
          arrClient.push(userAuth);
        });
        return { success: true, message: "Utilisateur connecté", data: arrClient };
      } else {
        return { success: false, message: "Utilisateur non trouvé", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };
}
