import { Gender } from "../../constants/Gender";
import { Here } from "../../constants/Here";

export default class ClientMatch {
  private id: number;
  private lastname: string;
  private firstname: string;
  private photo: string;
  private birthdate: Date;
  private city: string;
  private zipcode: string;
  private gender: Gender = Gender.MASC;
  private here_for: String;

  constructor(id: number, lastname: string, firstname: string, photo: string, birthdate: Date, city: string, zipcode: string, gender: Gender, here_for: String) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.photo = photo;
    this.birthdate = birthdate;
    this.city = city;
    this.zipcode = zipcode;
    this.gender = gender;
    this.here_for = here_for;
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

  public get getCity(): string {
    return this.city;
  }

  public get getZipcode(): string {
    return this.zipcode;
  }

  public get getHereFor(): String {
    return this.here_for;
  }

  public get getGender(): Gender {
    return this.gender;
  }

  public get getId() {
    return this.id;
  }

  public set setId(id: number) {
    this.id = id;
  }
}
