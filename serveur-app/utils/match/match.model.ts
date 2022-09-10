import Model from "../../model/Model";
import Client from "../entity/Client";

export default class MatchModel extends Model {
  private table: string = "match";
  private model = new Model();

  public getMatchByClientId = async (client: Client) => {};
}
