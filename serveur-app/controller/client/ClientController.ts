import Controller from "../Controller";
import ClientModel from "../../model/client/ClientModel";

class ClientController extends Controller {
  authenticate = async (req, res) => {
    let response = await ClientModel.authenticate(req.body.client_email ?? "", req.body.client_password ?? "");
    console.log(req.body);
    res.json(response);
  };
  getClientById = async (req, res) => {
    let response = await ClientModel.getClientById(req.params.client_id);
    console.log(req.params.client_id);
    res.json(response);
  };
  registerClient = async (req, res) => {
    let response = await ClientModel.registerClient(req.body);
    console.log(req.params.client_id);
    res.json(response);
  };
}
export default ClientController;
