import Model from "../../model/Model";
import Rating from "../entity/Rating";

export default class RatingModel extends Model {
  private table: string = "user_client";
  private model = new Model();

  public getRate = async (id: number) => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM ${this.table} WHERE id = $1`, [id]);
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
