import Model from "../../model/Model";
import Client from "../entity/Client";
import ClientMatch from "../entity/ClientMatch";
import Match from "../entity/Match";
import Pro from "../entity/Pro";

export default class MatchModel extends Model {
  private table: string = "matchs";
  private model = new Model();

  /**
   * Get a Match by Id
   *
   * @param my_id
   * @param client_id_liked
   * @param pro_id
   *
   * @returns
   */
   public getMatchById = async (match_id : number) => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM ${this.table} WHERE id = $1`, [match_id]);
      if (rows.length > 0){
        return { success: true, message: `Match trouvé`, data: rows };
      } else {
        return { success: false, message: "Match non trouvé", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };

  /**
   * Create a Match
   *
   * @param my_id
   * @param client_id_liked
   * @param pro_id
   *
   * @returns
   */
   public createMatch = async (my_id : number, client_id_liked : number, status : string, pro_id : number) => {
    try {
      let { rows } = await this.model.dbClient.query(`INSERT INTO ${this.table} (client1_id, client2_id, status, pro_id) VALUES ($1, $2, $3, $4)`, [my_id, client_id_liked, status, pro_id]);
      if (rows.length == 0){
        return { success: true, message: `Match crée`, data: rows };
      } else {
        return { success: false, message: "Match non crée", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };

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

  /**
   * Récupérer une match suivant 2 client et un pro
   *
   * @param my_id
   * @param client_id_liked
   * @param pro_id
   *
   * @returns
   */
  public getMatchBy2ClientIdsAndProId = async (my_id : number, client_id_liked : number, pro_id : number) => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM ${this.table} WHERE (client1_id = $1 AND client2_id = $2) OR (client1_id = $2 AND client2_id = $1) AND pro_id = $3`, [my_id, client_id_liked, pro_id]);
      if (rows.length > 0){
        return { success: true, message: `Match trouvé`, data: rows };
      } else {
        return { success: false, message: "Aucun match trouvé", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };
  
  public setLike = async (match_id : number) => {
    try {
      let { rows } = await this.model.dbClient.query(`UPDATE ${this.table} SET status = $2 WHERE id = $1`, [match_id, "bingo"]);
      if (rows.length == 0){
        return { success: true, message: `Match status set to bingo`, data: rows };
      } else {
        return { success: false, message: "Status match non modifié", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    } 
  };

  public setDislike = async (match_id : number) => {
    try {
      let { rows } = await this.model.dbClient.query(`UPDATE ${this.table} SET status = $2 WHERE id = $1`, [match_id, "aie"]);
      if (rows.length == 0){
        return { success: true, message: `Match status set to aie`, data: rows };
      } else {
        return { success: false, message: "Status match non modifié", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    } 
  };
}
