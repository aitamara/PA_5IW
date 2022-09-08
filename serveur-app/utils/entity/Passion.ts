import { passions } from "serveur-app/constants/Passions";

export default class Passion {
  label: passions;

  constructor(label: passions) {
    this.label = label;
  }
}
