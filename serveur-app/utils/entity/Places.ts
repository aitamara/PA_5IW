export default class Places {
  private lastname: string;
  private firstname: string;
  private label: string;
  private adresse: string;
  private city: string;
  private mail: string;
  private phone: string;
  /* private longitute: string;
  private latittude: string; */

  constructor(lastname: string, firstname: string) {
    this.lastname = lastname;
    this.firstname = firstname;
  }

  private verifyIdConv(id) {}
}
