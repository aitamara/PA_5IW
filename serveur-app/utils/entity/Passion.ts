import { passions } from "../../constants/Passions";

export default class Passion {
  label: passions;

  constructor(label: passions) {
    this.label = label;
  }
}
