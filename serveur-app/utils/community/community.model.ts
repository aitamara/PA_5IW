import Model from "../../model/Model";
import Client from "../entity/Client";
import Community from "../entity/Community";

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
   * Récupération d'une communauté par son id
   *
   * @param id_community
   *
   * @returns
   */
  public getCommunityByClientId = async (id_community: number) => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM ${this.table} WHERE id = $1`, [id_community]);
      if (rows.length > 0) {
        return { success: true, message: "Communauté trouvée", data: rows };
      } else {
        return { success: true, message: "Aucun communauté trouvée", data: [] };
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
  /* public getCommunityByClientId = async (id_community: number) => {
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
  }; */

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

  /**
   * Ajout d'un membres à une communauté
   *
   * @param id_community
   *
   * @returns
   */
  public addClientToCommunity = async (community: Community, client: Client) => {
    try {
      let { rows } = await this.model.dbClient.query(`INSERT INTO ${this.table_with_user} `, []);
      if (rows.length > 0) {
        return { success: true, message: `Vous avez rejoins ${community.getName}`, data: rows };
      } else {
        return { success: false, message: `Impossible de rejoindre la communauté : ${community.getName}`, data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };

  /**
   * Membres quitte une communauté
   *
   * @param id_community
   *
   * @returns
   */
  public leaveCommunity = async (community: Community, client: Client) => {
    try {
      let { rows } = await this.model.dbClient.query(`DELETE INTO ${this.table_with_user} WHERE id_community = $1 AND id_client = $2`, [community.getId, client.getId]);
      if (rows.length > 0) {
        return { success: true, message: `Vous avez quittez ${community.getName}`, data: rows };
      } else {
        return { success: false, message: `Impossible de quittez la communauté : ${community.getName}`, data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };
}
