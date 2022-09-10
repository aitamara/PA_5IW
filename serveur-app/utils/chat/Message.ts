import { State } from "../chat/State";
import RatingModel from "../rating/rating.model";

export default class Message {
  id_conv: Number;
  id_sender: Number;
  content: string;
  sendDate: string;
  state: State = State.BROU;

  constructor(id_sender: Number, id_conv: Number, content: string, sendDate: string) {
    this.id_conv = id_conv;
    this.id_sender = id_sender;
    this.content = content;
    this.sendDate = sendDate;
  }
}
