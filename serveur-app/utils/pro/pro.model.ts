import Model from "../../model/Model";
import Pro from "../entity/Pro";
let model = new Model();

class ProModel extends Model {
  getProById = async function (pro_id) {
    try {
      let { rows } = await model.dbClient.query(`SELECT * FROM public.user_pro WHERE id = $1`, [pro_id]);
      if (rows.length > 0) {
        let { id, name } = rows[0];
        let pro = new Pro(id, name);
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
