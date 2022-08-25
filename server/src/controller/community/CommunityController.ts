import Controller from "../Controller";
import CommunityModel from "../../model/community/CommunityModel";
import ClientModel from "../../model/client/ClientModel";

class CommunityController extends Controller {
    getCommunityByClientId = async (req, res) => {
      let response = await CommunityModel.getCommunityByClientId(req.body.client_id);
      res.json(response);
    };

    addClientToCommunity = async (req, res) => {
        let response = await CommunityModel.addClientToCommunity(req.body);
        res.json(response);
    }

    fireClientFromCommunity = async (req, res) => {
        let response = await CommunityModel.fireClientFromCommunity(req.body);
        res.json(response);
    }

    reintroduceClientIntoCommunity = async (req, res) => {
        let response = await CommunityModel.reintroduceClientIntoCommunity(req.body);
        res.json(response);
    }

    leaveCommunity = async (req, res) => {
        let response = await CommunityModel.leaveCommunity(req.body);
        res.json(response);
    }

    getCommunitiesByClientId = async (req, res) => {
        let response = await CommunityModel.getCommunitiesByClientId(req.body.client_id);
        res.json(response);
    }

    getCommunitiyMembersByProId = async (req, res) => {
        let response = await CommunityModel.getCommunitiyMembersByProId(req.body.pro_id);
        let clientIdList = "";
        response.data.forEach((element)=> {
            clientIdList += element.client_id+",";
        });
        clientIdList = clientIdList.substring(0, clientIdList.length - 1);
        response = await ClientModel.getClientsByArrayOfId(clientIdList);
        res.json(response);
    }
  }
  export default CommunityController;