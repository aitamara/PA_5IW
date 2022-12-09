import Model from "../../model/Model";
import Client from "../entity/Client";
import ClientAuth from "../entity/UserAuth";
import Community from "../entity/Community";

export default class CommunityModel extends Model {
  private table: string = "community";
  private model = new Model();

  /**
   * Récupération des communautés
   *
   * @param
   *
   * @returns
   */
  public getAllCommunities = async () => {
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
  public getCommunityByClientId = async (client_id: number) => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM ${this.table} WHERE client_id = $1`, [client_id]);
      if (rows.length > 0) {
        return { success: true, message: "Communauté(s) trouvée(s)", data: rows };
      } else {
        return { success: true, message: "Aucune communauté trouvée", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };

  /**
   * Récupération des membres d'une communauté
   *
   * @param pro_id
   *
   * @returns
   */
  public getCommunitiyMembers = async (pro_id: number) => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT client_id FROM ${this.table} WHERE pro_id = $1`, [pro_id]);
      if (rows.length > 0) {
        return { success: true, message: "Membre de la communauté récupérés", data: rows };
      } else {
        return { success: true, message: "Aucun utilisateur trouvé", data: [] };
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
  public addClientToCommunity = async (pro_id: number, client_id: number) => {
    try {
      let { rows } = await this.model.dbClient.query(`INSERT INTO ${this.table} (pro_id, client_id) VALUES ($1, $2)`, [pro_id, client_id]);
      return { success: true, message: `Vous avez rejoins la communauté`, data: rows };      
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
  public leaveCommunity = async (community_id : number) => {
    try {
      let { rows } = await this.model.dbClient.query(`UPDATE ${this.table} SET status = false WHERE id = $1`, [community_id]);
      return { success: true, message: `Vous avez quitté la communauté`, data: rows };
     
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };

  /**
   * Virer un client d'une communauté
   *
   * @param id_community
   *
   * @returns
   */
   public fireClient = async (community_id : number) => {
    try {
      let { rows } = await this.model.dbClient.query(`UPDATE ${this.table} SET status = null WHERE id = $1`, [community_id]);
      return { success: true, message: `Vous avez viré le client`, data: rows };
     
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };

  /**
   * Vérifier si un client est déja membre d'un communauté
   *
   * @param client_id
   * @param pro_id
   * 
   * @returns
   */
    public getClientAlredyMemberOfCommunity = async (client_id: number, pro_id: number) => {
      if (client_id !== null || pro_id !== null) {
        try {
          let { rows } = await this.model.dbClient.query(`SELECT * FROM public.${this.table} WHERE client_id = $1 AND pro_id = $2`, [client_id, pro_id]);
          if (rows.length > 0) {
            return { success: true, message: "Déja membre", data: rows };
          } else {
            return { success: true, message: "Client pas membre", data: [] };
          }
        } catch (err) {
          console.error(err);
          return { success: false, message: err, data: [] };
        }
      }
    };
}
