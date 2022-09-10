import Model from "../../model/Model";
class PlacesModel extends Model {
  private table: string = "places";
  private model = new Model();

  public getPlacesList = async () => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM ${this.table}`);
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

  public getPlaceByProId = async (passion_id: number) => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM public.passions WHERE id = $1`, [passion_id]);
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

  public getPlaceByProName = async (passion_name: string) => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM public.passions WHERE passion_name = $1`, [passion_name]);
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

  public getPlaceByName = async (passion_name: string) => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM public.passions WHERE passion_name = $1`, [passion_name]);
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
export default PlacesModel;
