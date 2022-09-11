import Pro from "./Pro";

export default class Community {
  private name: string;
  private pro: Pro;
  private id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  public get getName(): string {
    return this.name;
  }

  public get getId(): number {
    return this.id;
  }
}
