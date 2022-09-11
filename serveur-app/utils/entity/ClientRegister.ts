import { Gender } from "../../constants/Gender";
import { Here } from "../../constants/Here";

export default class ClientRegister {
  private lastname: string;
  private firstname: string;
  private photo: string;
  private birthdate: Date;
  private phone: string;
  private adress: string;
  private city: string;
  private zipcode: string;
  private gender: Gender = Gender.MASC;
  private here_for: Here;
  private interested_by: Gender;
  private password: string;

  constructor(
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
    interested_by: Gender,
    password: string
  ) {
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
    this.password = password;
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
}
