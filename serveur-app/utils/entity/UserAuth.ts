import { roles } from "serveur-app/constants/Roles";

export default class UserAuth {
  private email: string;
  private password: string;
  private role: roles;

  constructor(email: string, password: string, role: roles, id?: number) {
    this.email = email;
    this.password = password;
    this.role = role;
  }

  public get getEmail() {
    return this.email;
  }

  public get getPassword() {
    return this.password;
  }

  public get getRole() {
    return this.role;
  }

  /*   public get getId() {
    return this.id;
  }

  public set setId(id: number) {
    this.id = id;
  } */
}
