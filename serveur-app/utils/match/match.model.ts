import Model from "../../model/Model";
import Client from "../entity/Client";
import ClientMatch from "../entity/ClientMatch";
import Match from "../entity/Match";
import Pro from "../entity/Pro";

export default class MatchModel extends Model {
  private table: string = "match";
  private model = new Model();

  /**
   *
   * @param client
   */
  public getMatchByClientId = async (client: Client) => {
    try {
      let arrClient: Array<Match> = [],
        match: Match,
        client2: ClientMatch,
        pro: Pro,
        { rows } = await this.model.dbClient.query(
          `SELECT 
          t1.*,
          t2.id as c2_id,
          t2.lastname as c2_lastname,
          t2.firstname as c2_firstname,
          t2.photo as c2_photo,
          t2.birthdate as c2_birthdate,
          t2.city as c2_city,
          t2.zipcode as c2_zipcode,
          t2.gender as c2_gender,
          t2.here_for as c2_here_for,
          t3.id as pro_id,
          t3.lastname as pro_lastname,
          t3.firstname as pro_firstname,
          t3.proname as pro_proname,
          t3.photo as pro_photo,
          t3.adress as pro_adress,
          t3.city as pro_city,
          t3.zipcode as pro_zipcode,
          t3.activated as pro_activated,
          t3.coord_lat as pro_coord_lat,
          t3.coord_long as pro_coord_long
          FROM public.${this.table} as t1 
          INNER JOIN user_client as t2 ON client2_id == id
          INNER JOIN user_pro as t3 ON pro_id == id
          WHERE client_id = $1`,
          [client.getId]
        );
      if (rows.length > 0) {
        rows.forEach((e) => {
          client2 = new ClientMatch(e.c2_id, e.c2_lastname, e.c2_firstname, e.c2_photo, e.c2_birthdate, e.c2_city, e.c2_zipcode, e.c2_gender, e.c2_here_for);
          pro = new Pro(
            e.pro_id,
            e.pro_lastname,
            e.pro_firstname,
            e.pro_proname,
            e.pro_photo,
            e.pro_adress,
            e.pro_city,
            e.pro_zipcode,
            e.pro_activated,
            e.pro_coord_lat,
            e.pro_coord_long
          );
          match = new Match(e.id, client, client2, pro, e.status, e.created_at);
          arrClient.push(match);
        });
        return { success: true, message: "succes", data: rows };
      } else {
        return { success: false, message: "Aucun match trouvé", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };

  public setLike = async (client: Client, client_liked: Client) => {};

  public setDislike = async (client: Client, client_liked: Client) => {};
}
