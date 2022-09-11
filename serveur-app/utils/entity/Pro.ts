import Rating from "./Rating";

export default class Pro {
  private id: number;
  private lastname: string;
  private firstname: string;
  private proname: string;
  private photo: string;
  private adress: string;
  private city: string;
  private zipcode: string;
  private activated: Boolean;
  private coord_lat: string;
  private coord_long: string;
  /* private rate: Rating; */

  constructor(
    id: number,
    lastname: string,
    firstname: string,
    proname: string,
    photo: string,
    adress: string,
    city: string,
    zipcode: string,
    activated: Boolean,
    coord_lat: string,
    coord_long: string
  ) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.proname = proname;
    this.photo = photo;
    this.adress = adress;
    this.city = city;
    this.zipcode = zipcode;
    this.activated = activated;
    this.coord_lat = coord_lat;
    this.coord_long = coord_long;
  }

  public get getLastname() {
    return this.lastname;
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
