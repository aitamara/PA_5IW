import Controller from "../../controller/Controller";
import ProModel from "./pro.model";

class ProController extends Controller {
  getProById = async (req, res) => {
    //let response = await ProModel.getProById(req.params.pro_id);
    //res.json(response);
  };

  getAllPro = async (req, res) => {
    let response = await ProModel.getAllPro();
    res.json(response);
  };
}
export default ProController;
