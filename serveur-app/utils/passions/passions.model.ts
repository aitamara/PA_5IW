import Model from "../../model/Model";

export default class PassionsModel extends Model {
  getPassionsList = async function () {
    try {
      let { rows } = await model.dbClient.query(`SELECT * FROM public.passions`);
      if (rows.length > 0) {
        return { code: 200, message: "succes", data: rows };
      } else {
        return { code: 404, message: "No passions", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };
  getPassionById = async function (passion_id: number) {
    try {
      let { rows } = await model.dbClient.query(`SELECT * FROM public.passions WHERE id = $1`, [passion_id]);
      if (rows.length > 0) {
        return { code: 200, message: "succes", data: rows };
      } else {
        return { code: 404, message: "No passions", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };
  getPassionbyName = async function (passion_name: string) {
    try {
      let { rows } = await model.dbClient.query(`SELECT * FROM public.passions WHERE passion_name = $1`, [passion_name]);
      if (rows.length > 0) {
        return { code: 200, message: "succes", data: rows };
      } else {
        return { code: 404, message: "No passions", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };
}
