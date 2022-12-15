import { Request, Response } from "express";
import Controller from "../../controller/Controller";
import QueryResponse from "../interfaces/query.interface";
import Verification from "../interfaces/verification.interface";
import ChatConvModel from "./chatConv.model";

export default class ChatConvController extends Controller {
    private mdl = new ChatConvModel();
    
    /**
     * Bloquer une conversation
     * 
     * @param req
     * @param res
    */
    public updateConvStatus = async (req: Request, res: Response) => {
        let code = 400;
        let response: QueryResponse = { error: true, message: "Bad request", data: [] };

        if (Object.keys(req.body).length > 0) {
            let dataIpt: Array<Verification> = [
                { label: "chat_conv_id", type: "number" },
                { label: "status", type: "string" }
            ];
            let listError = this.verifSecure(dataIpt, req.body);

            if (listError.length > 0) {
                response.message = "Erreur";
                response.data.push(listError);
            } else {
                try {
                code = 200;
                let update = await this.mdl.updateConvStatus(req.body.chat_conv_id, req.body.status);
                response.error = !update.success;
                response.message = update.message;
                } catch (error) {
                console.log(error);
                res.status(400).send(error);
                }
            }
        }
        res.status(code).send(response);
    };
}