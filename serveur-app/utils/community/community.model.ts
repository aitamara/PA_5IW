import Model from "../../model/Model";

export default class CommunityModel extends Model {
  private table: string = "community";
  private table_with_user: string = "user_comminty";
  private model = new Model();

  /**
   * Récupération des communauté
   *
   * @param id_community
   *
   * @returns
   */
  public getCommunity = async () => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM ${this.table}`);
      if (rows.length > 0) {
        return { success: true, message: "Communautés récupérées", data: rows };
      } else {
        return { success: true, message: "Aucunes communautés trouvées", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };

  /**
   * Récupération des membres d'une communauté
   *
   * @param id_community
   *
   * @returns
   */
  public getCommunityByClientId = async (id_community: number) => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM ${this.table_with_user} WHERE id_community = $1`, [id_community]);
      if (rows.length > 0) {
        return { success: true, message: "succes", data: rows };
      } else {
        return { success: true, message: "Aucun utilisateurs trouvés", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };

  /**
   * Récupération des membres d'une communauté
   *
   * @param id_community
   *
   * @returns
   */
  public getCommunitiyMembers = async (id_community: number) => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM ${this.table_with_user} WHERE id_community = $1`, [id_community]);
      if (rows.length > 0) {
        return { success: true, message: "succes", data: rows };
      } else {
        return { success: true, message: "Aucun utilisateurs trouvés", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };
}
