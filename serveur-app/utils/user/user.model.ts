import { roles } from "../../constants/Roles";
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
      let { rows } = await this.model.dbClient.query(
        `SELECT * FROM public.${this.table} WHERE email = $1 AND password = $2`,
        [userAuth.getEmail, client_password]
      );
      if (rows.length > 0) {
        let tableJ = "user_client";
        let role = "client";
        if (rows[0].role == roles.PRO) {
          tableJ = "user_pro";
          role = "pro";
        }
        rows = await this.model.dbClient.query(`SELECT * FROM public.${tableJ} WHERE user_id = $1`, [rows[0].id]);
        rows.rows.forEach((e) => {
          if (e.role == roles.CLIENT) {
            role = roles.CLIENT;
            user = new Client(
              e.id,
              e.lastname,
              e.firstname,
              e.photo,
              e.birthdate,
              e.phone,
              e.adress,
              e.city,
              e.zipcode,
              e.gender,
              e.here_for,
              e.intrested_by
            );
          } else if (e.role == roles.PRO) {
            role = roles.PRO;
            user = new Pro(
              e.id,
              e.lastname,
              e.firstname,
              e.proname,
              e.photo,
              e.adress,
              e.city,
              e.zipcode,
              e.activated,
              e.coord_lat,
              e.coord_long
            );
            //rows.rows[0]["role"] = roles.PRO;
          }
        });
        rows.rows[0]["email"] = userAuth.getEmail;
        rows.rows[0]["password"] = userAuth.getPassword;
        rows.rows[0]["role"] = role;
        return { success: true, message: "Utilisateur connecté", data: rows.rows };
      } else {
        return { success: false, message: "Utilisateur non trouvé", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };
}
