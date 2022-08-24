import mongoose from "mongoose";
import UserPro from "../model/UserPro";

export default class MatchsController {
    static propositions = async (req, res) => {
        try {            
            const { client_id, pro_id } = req.body;
            const id = mongoose.Types.ObjectId(pro_id);
            //console.log(typeof Math.floor(pro_id)); 
            const pro = await UserPro.find({id : id});
            console.log(pro);
            res.send(pro);
        } catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
    }
}