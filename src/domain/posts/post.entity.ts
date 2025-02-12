import { randomUUID } from "node:crypto";

export class Post {
  id: string;
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.id = randomUUID();
    this.title = title;
    this.content = content;
  }
}
