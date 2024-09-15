export class ValidationError {
  private message: string;
  private path?: string;

  constructor(message: string, path?: string) {
    this.message = message;
    this.path = path;
  }
}
