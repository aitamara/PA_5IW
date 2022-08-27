import { State } from "./state";
import RatingModel from "../rating/RatingModel";

export default class Message {
  id_conv: Number;
  id_sender: Number
  content: string;
  sendDate: string;
  state: State = State.BROU;

  constructor(id_sender: Number, id_conv: Number, content: string, sendDate: string) {
    this.id_conv = id_conv;
    this.id_sender = id_sender;
    this.content = content;
    this.sendDate = sendDate;
  }

  private verifyIdConv(id) {
    
  }
}