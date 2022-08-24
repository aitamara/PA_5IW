import Controller from "../Controller";
import ClientModel from "../../model/client/ClientModel";

class ClientController extends Controller {
  authenticate = async (req, res) => {
    res.json({ code: 200, message: "It's Work", data: [] });
  };
  getClientById = async (req, res) => {
    let response = await ClientModel.getClientById(req.params.client_id);
    console.log(req.params.client_id);
    res.json(response);
  };
  registerClient = async (req, res) => {
    let response = await ClientModel.getClientById(req.params.client_id);
    console.log(req.params.client_id);
    res.json(response);
  };
}
export default ClientController;
