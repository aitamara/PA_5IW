import Model from "../Model";
class PlacesModel extends Model {/*

  static getPlacesList = async function () {
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
  static getPlaceByProId = async function (passion_id: number) {
    try {
      let { rows } = await model.dbClient.query(
        `SELECT * FROM public.passions WHERE id = $1`,
        [passion_id]
      );
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
  static getPlaceByProName = async function (passion_name: string) {
    try {
      let { rows } = await model.dbClient.query(
        `SELECT * FROM public.passions WHERE passion_name = $1`,
        [passion_name]
      );
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
  static getPlaceByName = async function (passion_name: string) {
    try {
      let { rows } = await model.dbClient.query(
        `SELECT * FROM public.passions WHERE passion_name = $1`,
        [passion_name]
      );
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
*/}
export default PlacesModel;
