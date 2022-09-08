import Client from "./Client";
import Pro from "./Pro";

export default class Rating {
  private id: number = 0;
  private mark: number;
  private text: string;
  private pro: Pro;
  private client: Client;
  private created_at: Date;

  constructor(mark: number, text: string, pro: Pro, client: Client) {
    if (0 <= mark || mark <= 5) this.mark = mark;
    this.text = text;
    this.pro = pro;
    this.client = client;
    this.created_at = new Date();
  }

  public get getMark(): number {
    return this.mark;
  }

  public get getText(): string {
    return this.text;
  }

  public get getPro(): Pro {
    return this.pro;
  }

  public get getClient(): Client {
    return this.client;
  }

  public get getDate(): Date {
    return this.created_at;
  }

  public get getId(): Date {
    return this.created_at;
  }
}
