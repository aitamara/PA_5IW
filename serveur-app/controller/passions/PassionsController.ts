import Controller from "../Controller";
import PassionsModel from "../../model/passions/PassionsModel";
class PassionsController extends Controller {
  getPassionsList = async (req, res) => {
    //const response = await PassionsModel.getPassionsList()
    //res.json(response);
  };
  getPassionById = async (req, res) => {
    //const response = await PassionsModel.getPassionById(req.params.passion_id ?? -1)
    //res.json(response);
  };
  getPassionByName = async (req, res) => {
    //const response = await PassionsModel.getPassionbyName(req.params.passion_name ?? "")
    //res.json(response);
  };
}
export default PassionsController;
