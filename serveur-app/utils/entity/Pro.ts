import Rating from "./Rating";

export default class Pro {
  private id: number;
  private name: string;
  private adress: string;
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

  public get getName() {
    return this.name;
  }

  public get getAdress() {
    return this.adress;
  }

  public get getCity() {
    return this.city;
  }

  public get getId() {
    return this.id;
  }

  public set setId(id: number) {
    this.id = id;
  }
}
