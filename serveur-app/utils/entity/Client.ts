import Places from "./Places";
import { Gender } from "../../constants/Gender";
import { Here } from "../../constants/Here";

export default class Client {
  private id: number;
  private lastname: string;
  private firstname: string;
  private photo: string;
  private birthdate: Date;
  private phone: string;
  private adress: string;
  private city: string;
  private zipcode: string;
  private gender: Gender = Gender.MASC;
  private here_for: Here = Here.ALL;
  private interested_by: Gender;

  constructor(
    id: number,
    lastname: string,
    firstname: string,
    photo: string,
    birthdate: Date,
    phone: string,
    adress: string,
    city: string,
    zipcode: string,
    gender: Gender,
    here_for: Here,
    interested_by: Gender
  ) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.photo = photo;
    this.birthdate = birthdate;
    this.phone = phone;
    this.adress = adress;
    this.city = city;
    this.zipcode = zipcode;
    this.gender = gender;
    this.here_for = here_for;
    this.interested_by = interested_by;
  }

  public get getFirstName(): string {
    return this.firstname;
  }

  public get getLastName(): string {
    return this.lastname;
  }

  public get getPhoto(): string {
    return this.photo;
  }

  public get getbirthdate(): Date {
    return this.birthdate;
  }

  public get getPhone(): string {
    return this.phone;
  }

  public get getAdress(): string {
    return this.adress;
  }

  public get getCity(): string {
    return this.city;
  }

  public get getZipcode(): string {
    return this.zipcode;
  }

  public get getHereFor(): Here {
    return this.here_for;
  }

  public get getGender(): Gender {
    return this.gender;
  }

  public get getInterested_by(): Gender {
    return this.interested_by;
  }

  public get getId() {
    return this.id;
  }

  public set setId(id: number) {
    this.id = id;
  }

  public findPlacesAround(zoneKm: number = 2): Array<Places> {
    let places: Array<Places> = [];
    //faire un ronds autour et trouver les places les plus proches
    return places;
  }
}
