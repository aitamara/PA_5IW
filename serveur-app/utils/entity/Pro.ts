import Rating from "./Rating";

export default class Pro {
  private id: number;
  private name: string;
  private adresse: string;
  private city: string;
  private mail: string;
  private time_display: Date;
  /* private rate: Rating; */
  /* private longitute: string;
  private latittude: string; */

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
