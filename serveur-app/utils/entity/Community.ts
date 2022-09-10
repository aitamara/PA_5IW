import Pro from "./Pro";

export default class Community {
  private name: string;
  private pro: Pro;
  private id: number;

  constructor(...args: any[]) {}

  public get getName(): string {
    return this.name;
  }
}
