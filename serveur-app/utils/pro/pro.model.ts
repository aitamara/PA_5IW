import { table } from "console";
import Model from "../../model/Model";
import Pro from "../entity/Pro";
let model = new Model();

class ProModel extends Model {
  private table: string = "user_pro";
  private model = new Model();

  static getAllPro = async () => {
    try {
      let { rows } = await model.dbClient.query(`SELECT * FROM public.user_pro`);
      if (rows.length > 0) {
        return { code: 200, message: "succes", data: [rows] };
      } else {
        return { code: 404, message: "Aucun Pro trouvé", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  }  

  public getProById = async (pro_id) => {
    try {
      let { rows } = await model.dbClient.query(`SELECT * FROM public.${this.table} WHERE id = $1`, [pro_id]);
      if (rows.length > 0) {
        let pro;
        rows.forEach((e) => {
          pro = new Pro(e.id, e.lastname, e.firstname, e.proname, e.photo, e.adress, e.city, e.zipcode, e.activated, e.coord_lat, e.coord_long);
        });
        return { code: 200, message: "succes", data: [pro] };
      } else {
        return { code: 404, message: "Pro non trouvé", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };

  public getAllPro = async () => {
    try {
      let { rows } = await model.dbClient.query(`SELECT * FROM public.${this.table}`);
      if (rows.length > 0) {
        let pro;
        rows.forEach((e) => {
          pro = new Pro(e.id, e.lastname, e.firstname, e.proname, e.photo, e.adress, e.city, e.zipcode, e.activated, e.coord_lat, e.coord_long);
        });
        return { code: 200, message: "succes", data: [pro] };
      } else {
        return { code: 404, message: "Pro non trouvé", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };
}
export default ProModel;
