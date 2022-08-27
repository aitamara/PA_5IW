import pg from "pg";
import Model from "../Model";

const { Client } = pg;

export default class ChatMsgModel extends Model {
  static sendMsg = async function () {
  };
  
  static getMsg =  async function () {
  };
  
  static getMsgForUser = async function (client_id: Number) {
  };
  
  static getLastMsg = async function () {
  };
}
