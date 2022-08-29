import Controller from "../Controller";
import MatchsModel from "../../model/matchs/MatchsModel";

class MatchsController extends Controller {
    createOrUpdateMatch = async (req, res) => {
        try {
            /* let {client1_id, client2_id, pro_id} = req.body; */
            let response = await MatchsModel.getMatch(req.body);
            if(response.data.length > 0) {
                response = await MatchsModel.updateMatch(response.data[0]);
            } else {
                response = await MatchsModel.createMatch(req.body);
            }
        } catch (error) {
        }
    };
}
export default MatchsController;