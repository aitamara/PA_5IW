import { roles } from "../../constants/Roles";

export default class UserAuth {
  private email: string;
  private password: string;
  private role?: roles;

  constructor(email: string, password: string, role?: roles) {
    this.email = email;
    this.password = password;
    if(role) this.role = role;
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
}
