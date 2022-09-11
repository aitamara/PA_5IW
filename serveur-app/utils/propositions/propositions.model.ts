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
  public getPropositions = async (client: Client, pro: Pro) => {
    try {
        let { rows } = await this.model.dbClient.query(
          `SELECT * 
          FROM user_client 
          INNER JOIN community 
          ON community.pro_id = $1
          WHERE user_client.id = community.client_id 
          AND user_client.id != $2
          AND (user_client.intrested_by = $3 OR user_client.intrested_by = 'ALL') 
          AND ($4 = user_client.gender OR $4 = 'ALL')
          AND (user_client.here_for = 'ALL' OR user_client.here_for = $5 OR monHereFor = 'ALL')`,
          [pro.getId, client.getId, client.getGender, client.getInterested_by, client.getHereFor]
        );
        console.log(rows);        
        if (rows.length > 0) {
            rows.forEach((e) => {
            let i = 1; 
            });
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
