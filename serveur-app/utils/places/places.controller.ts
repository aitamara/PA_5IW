import { Request, Response } from "express";
import Controller from "../../controller/Controller";
import Places from "../entity/Places";
import QueryResponse from "../interfaces/query.interface";
import Verification from "../interfaces/verification.interface";
import PlacesModel from "./places.model";

class PlacesController extends Controller {
  private plcMdl = new PlacesModel();

  public getPlaceByProId = async (req, res) => {
    const response = await PlacesModel.getPlaceByProId(req.params.pro_id ?? -1);
    res.json(response);
  };

  public getPlaceByProName = async (req, res) => {
    const response = await PlacesModel.getPlaceByProName(req.params.pro_name ?? "");
    res.json(response);
  };

  /**
   *
   *
   * @param req
   * @param res
   */
  public getPlaceByName = async (req, res) => {
    const response = await PlacesModel.getPlaceByName(req.params.place_name ?? "");
    res.json(response);
  };

  /**
   * Récupération des places selon zone
   *
   * @param req
   * @param res
   */
  public getPlacesList = async (req: Request, res: Response) => {
    let code = 400;
    let message: string = "Bad request";
    let response: QueryResponse = { error: true, message: message, data: [] };

    if (Object.keys(req.body).length > 0) {
      let dataIpt: Array<Verification> = [
        { label: "longitute", type: "string" },
        { label: "latitude", type: "string" },
      ];
      let listError = this.verifSecure(dataIpt, req.body);

      if (listError.length > 0) {
        response.message = "Erreur";
        response.data.push(listError);
      } else {
        try {
          code = 200;
          message = "Client inexistant";
          let data: Places[] = await this.plcMdl.getPlacesList();
          if (data.length > 0) {
            message = "Client récupéré";
            response.data.push(data);
          }
        } catch (error) {
          console.log(error);
          res.status(400).send(error);
        }
      }
    }
    res.status(code).send(response);
  };
}
export default PlacesController;
