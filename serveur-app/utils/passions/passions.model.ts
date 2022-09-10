import Model from "../../model/Model";
import Client from "../entity/Client";
import Passion from "../entity/Passion";

export default class PassionsModel extends Model {
  private table: string = "passions";
  private tableWithClient: string = "passions_client";
  private model: Model;

  /**
   * Récupération de l'ensemble des passions
   *
   * @returns
   */
  getPassionsList = async () => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM ${this.table}`);
      if (rows.length > 0) {
        return { success: true, message: "Passions récupérées", data: rows };
      } else {
        return { success: false, message: "No passions", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };

  /**
   * Récupération des passions selon leur id
   *
   * @returns
   */
  getPassionsById = async (id_passion: Array<number>) => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM ${this.table}`);
      if (rows.length > 0) {
        return { success: true, message: "Passions récupérées", data: rows };
      } else {
        return { success: false, message: "No passions", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };

  /**
   * Modification des passions d'un client
   *
   * @returns
   */
  setPassionsListForClient = async (client: Client, passions: Array<Passion>) => {
    try {
      await this.model.dbClient.query(`DELETE * FROM ${this.tableWithClient} WHERE id = $1`, [client.getId]);
      let { rows } = await this.model.dbClient.query(`INSERT INTO ${this.tableWithClient} `, [client.getId]);
      if (rows.length > 0) {
        return { success: true, message: "Passions mises à jours", data: rows };
      } else {
        return { success: false, message: "Impossible de modifier les passions", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };
}
