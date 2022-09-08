import Controller from "../../controller/Controller";
import PlacesModel from "./places.model";

class PlacesController extends Controller {
  /*
  getPlacesList = async (req, res) => {
    const response = await PlacesModel.getPlacesList()
    res.json(response);
  };
  getPlaceByProId = async (req, res) => {
    const response = await PlacesModel.getPlaceByProId(req.params.pro_id ?? -1)
    res.json(response);
  };
  getPlaceByProName = async (req, res) => {
    const response = await PlacesModel.getPlaceByProName(req.params.pro_name ?? "")
    res.json(response);
  };
  getPlaceByName = async (req, res) => {
    const response = await PlacesModel.getPlaceByName(req.params.place_name ?? "")
    res.json(response);
  };
  */
}
export default PlacesController;
