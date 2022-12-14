import { Request, Response } from "express";
import Controller from "../../controller/Controller";
import QueryResponse from "../interfaces/query.interface";
import Verification from "../interfaces/verification.interface";
import ChatConvModel from "./chatConv.model";

export default class MatchController extends Controller {
    private mdl = new ChatConvModel();
    
}