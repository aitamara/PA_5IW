import Model from "../../model/Model";
import Pro from "../entity/Pro";
import Rating from "../entity/Rating";

export default class RatingModel extends Model {
  private table: string = "rating";
  private model: Model;

  /**
   * Récupération des notes d'un pro
   *
   * @param id
   * @returns
   */
  public getRates = async (pro: Pro) => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM ${this.table} WHERE id_pro = $1`, [pro.getId]);
      if (rows.length > 0) {
        return { success: true, message: "Avis trouvé", data: rows };
      } else {
        return { success: false, message: "Avis non trouvée", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: true, message: err, data: [] };
    }
  };

  /**
   * Ajout d'une note pour un pro par un client
   *
   * @param rating
   * @returns
   */
  public sendRate = async (rating: Rating) => {
    try {
      let { rows } = await this.model.dbClient.query(`INSERT INTO ${this.table} WHERE id = $1`, [rating.getId]);
      if (rows.length > 0) {
        return { success: true, message: "Avis ajouté", data: rows };
      } else {
        return { success: false, message: "Impossible d'ajouté l'avis", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };

  /**
   * Suppression d'une note par son créateur
   *
   * @param rating
   * @returns
   */
  public deleteRate = async (rating: Rating) => {
    try {
      let { rows } = await this.model.dbClient.query(`DELELTE FROM rating WHERE id = $1`, [rating.getId]);
      if (rows.length > 0) {
        return { success: true, message: "Avis supprimé", data: rows };
      } else {
        return { success: false, message: "Impossible de supprimé l'avis", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };
}
