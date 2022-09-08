import Model from "../../model/Model";
import Pro from "../entity/Pro";
import Rating from "../entity/Rating";

export default class RatingModel extends Model {
  private table: string = "user_client";
  private model = new Model();

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
        return { error: false, message: "Avis trouvé", data: rows };
      } else {
        return { error: true, message: "Avis non trouvée", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { error: true, message: err, data: [] };
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
        return { code: 200, message: "succes", data: rows };
      } else {
        return { code: 404, message: "Avis ajouté", data: [] };
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
        return { code: 200, success: true, data: rows };
      } else {
        return { code: 404, success: false, data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };

  /* getRateByPro = async function (pro_id: Number) {
    try {
      console.log("hello");

      let { rows } = await model.dbClient.query(`SELECT * FROM rating WHERE id_pro = $1`, [pro_id]);
      if (rows.length > 0) {
        return { code: 200, message: "succes", data: rows };
      } else {
        return { code: 404, message: "Aucune note trouvée", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  }; */
  /*
  static getBestRate = async function () {
    try {
      let { rows } = await model.dbClient.query(
        `SELECT * FROM rating ORDER BY note DESC LIMIT 10`
      );
      if (rows.length > 0) {
        return { code: 200, message: "succes", data: rows };
      } else {
        return { code: 404, message: "Aucun avis trouvé", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };
  
  */
}
