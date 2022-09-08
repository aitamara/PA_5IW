import Model from "../../model/Model";

export default class CommunityModel extends Model {
  private table: string = "community";
  private table_with_user: string = "user_comminty";
  private model = new Model();

  getCommunitiyMembers = async (id_community: number) => {
    try {
      //table de jonction entre community et user
      let { rows } = await this.model.dbClient.query(`SELECT * FROM ${this.table_with_user} WHERE id_community = $1`, [id_community]);
      if (rows.length > 0) {
        return { code: 200, message: "succes", data: rows };
      } else {
        return { code: 404, message: "Aucun utilisateurs trouvés", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };
}
