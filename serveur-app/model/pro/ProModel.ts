import Model from "../Model";
let model = new Model();

class ProModel extends Model {
  /*static getProById = async function (pro_id) {
    try {
      let { rows } = await model.dbClient.query(
        `SELECT * FROM public.user_pro WHERE id = $1`,
        [pro_id]
      );
      if (rows.length > 0) {
        return { code: 200, message: "succes", data: rows };
      } else {
        return { code: 404, message: "Pro non trouvé", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };*/
}
export default ProModel;
