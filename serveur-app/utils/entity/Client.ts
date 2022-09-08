import Places from "./Places";
import { Gender } from "../../constants/Gender";
import { Here } from "../../constants/Here";

export default class Client {
  private lastname: string;
  private firstname: string;
  private date_of_birth: Date;
  private adress: string;
  private city: string;
  private mail: string;
  private here_for: Array<Here>;
  private gender: Gender = Gender.MASC;
  private interested_by: Array<Gender> = [];
  private password: string;
  private id: number;
  private longitute: string = "";
  private latittude: string = "";

  constructor(
    lastname: string,
    firstname: string,
    date_of_birth: Date,
    adress: string,
    city: string,
    mail: string,
    here_for: Array<Here>,
    gender: Gender,
    interested_by: Array<Gender>,
    password: string
  ); // definition 1

  constructor(
    id: number,
    lastname: string,
    firstname: string,
    date_of_birth: Date,
    adress: string,
    city: string,
    mail: string,
    here_for: Array<Here>,
    gender: Gender,
    interested_by: Array<Gender>
  ); // definition 2

  constructor(...args: any[]) {}

  /* constructor(lastname: string, firstname: string, here_for: Array<Here>, gender: Gender, interested_by: Array<Gender>) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.here_for = here_for;
    this.gender = gender;
    this.interested_by = interested_by;
  } */

  /* public createClient(
    lastname: string,
    firstname: string,
    date_of_birth: Date,
    adress: string,
    city: string,
    mail: string,
    here_for: Array<Here>,
    gender: Gender,
    interested_by: Array<Gender>,
    password: string
  ) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.date_of_birth = date_of_birth;
    this.adress = adress;
    this.city = city;
    this.mail = mail;
    this.here_for = here_for;
    this.gender = gender;
    this.interested_by = interested_by;
    this.password = password;
  }

  public importClient(
    id: number,
    lastname: string,
    firstname: string,
    date_of_birth: Date,
    adress: string,
    city: string,
    mail: string,
    here_for: Array<Here>,
    gender: Gender,
    interested_by: Array<Gender>
  ) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.date_of_birth = date_of_birth;
    this.adress = adress;
    this.city = city;
    this.mail = mail;
    this.here_for = here_for;
    this.gender = gender;
    this.interested_by = interested_by;
  } */

  public get getName(): string {
    return this.lastname;
  }

  public get getFirstName(): string {
    return this.firstname;
  }

  public get getDate_of_birth(): Date {
    return this.date_of_birth;
  }

  public get getAdress(): string {
    return this.adress;
  }

  public get getCity(): string {
    return this.city;
  }

  public get getMail(): string {
    return this.mail;
  }

  public get getHereFor(): Here[] {
    return this.here_for;
  }

  public get getGender(): Gender {
    return this.gender;
  }

  public get getInterested_by(): Gender[] {
    return this.interested_by;
  }

  public get getId() {
    return this.id;
  }

  public set setId(id: number) {
    this.id = id;
  }
  public get getPassword(): string {
    return this.password;
  }

  public findPlacesAround(zoneKm: number = 2): Array<Places> {
    let places: Array<Places> = [];
    //faire un ronds autour et trouver les places les plus proches
    return places;
  }

  public userWithoutPwd(): Object {
    return {
      lastname: this.getName,
      firstname: this.getFirstName,
      date_of_birth: this.getDate_of_birth,
      adress: this.getAdress,
      city: this.getCity,
      mail: this.getMail,
      here_for: this.getHereFor,
      gender: this.gender,
      interested_by: this.interested_by,
      id: this.getId,
    };
  }
}
