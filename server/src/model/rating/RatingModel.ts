import pg from "pg";
import Model from "../Model";

const { Client } = pg;
const client = new Client()

export default class RatingModel extends Model {
  static sendRate = async function () {
    
  };
  
  static getRateByPro = async function (pro_id: Number) {
    try {
      console.log("hello");
      
      let { rows } = await dbClient.dbClient.query(
        `SELECT * FROM rating WHERE id_pro = $1`,
        [pro_id]
      );
      if (rows.length > 0) {
        return { code: 200, message: "succes", data: rows };
      } else {
        return { code: 404, message: "Aucune note trouvée", data: [] };
      }
      
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };
  /*
  static getBestRate = async function () {
    try {
      let { rows } = await dbClient.dbClient.query(
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
  
  static deleteRate = async function (pro_id: Number) {
    try {
      let { rows } = await dbClient.dbClient.query(
        `DELELTE FROM rating WHERE id_pro = $1`,
        [pro_id]
      );
      if (rows.length > 0) {
        return { code: 200, message: "succes", data: rows };
      } else {
        return { code: 404, message: "Avis non trouvée", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };
  */
}
