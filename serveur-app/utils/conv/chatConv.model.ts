import Model from "../../model/Model";

export default class ChatConvModel extends Model {
    private table: string = "chat_conv";
    private model = new Model();

    /**
   * Create a Conv
   *
   * @param matchs_id
   *
   * @returns
   */
   public createChatConv = async (matchs_id : number) => {
    try {
      let { rows } = await this.model.dbClient.query(`INSERT INTO ${this.table} (matchs_id, status) VALUES ($1, $2)`, [matchs_id, "active"]);
      if (rows.length > 0){
        return { success: true, message: `Conv créée`, data: rows };
      } else {
        return { success: false, message: "Conv non créée", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };
}