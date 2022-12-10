import Model from "../../model/Model";
import Client from "../entity/Client";
import Pro from "../entity/Pro";
import Community from "../entity/Community";

export default class PropositionsModel extends Model {
  private table: string = "match";
  private model = new Model();

  /**
   *
   * @param client
   */
  public getPropositions = async (client: Client, pro_id: number) => {
    try {
        let { rows } = await this.model.dbClient.query(
          `SELECT client_id, lastname 
          FROM community 
          INNER JOIN user_client 
          ON user_client.id = community.client_id
          WHERE community.pro_id = $1
          AND user_client.id != $2
          AND user_client.activated = true
          AND (user_client.intrested_by = $3 OR user_client.intrested_by = 'ALL') 
          AND (user_client.gender = $4 OR 'ALL' = $4)
          AND (user_client.here_for = 'ALL' OR user_client.here_for = $5 OR 'ALL' = $5)`,
          [pro_id, client.getId, client.getGender, client.getInterested_by, client.getHereFor]          
        );      
        if (rows.length > 0) {
            return { success: true, message: "succes", data: rows };
        } else {
            return { success: false, message: "Aucune proposition trouvée", data: [] };
        }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };
}
