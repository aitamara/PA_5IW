import Client from "./Client";
import ClientMatch from "./ClientMatch";
import Pro from "./Pro";

export default class Match {
  private id: number;
  private client1: Client;
  private client2: ClientMatch;
  private pro: Pro;
  private status: string;
  private created_at: Date;

  constructor(id: number, client1: Client, client2: ClientMatch, pro: Pro, status: string, created_at: Date) {
    this.id = id;
    this.client1 = client1;
    this.client2 = client2;
    this.pro = pro;
    this.status = status;
    this.created_at = created_at;
  }

  public get getId(): number {
    return this.id;
  }

  public get getClient1(): Client {
    return this.client1;
  }

  public get getClient2(): ClientMatch {
    return this.client2;
  }
}
