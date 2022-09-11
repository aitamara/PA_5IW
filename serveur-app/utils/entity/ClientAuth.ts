import { Gender } from "../../constants/Gender";
import { Here } from "../../constants/Here";

export default class ClientAuth {
  private email: string;
  private password: string;
  private role: string;
  private id: number;

  constructor(
    email: string,
    password: string,
    role: string,
    id: number
  ) {
    this.email = email;
    this.password = password;
    this.role = role;
    this.id = id;
  }

  public get getId() {
    return this.id;
  }
}
