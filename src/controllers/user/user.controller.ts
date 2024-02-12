export class UserController {
  public async Get(): Promise<string> {
    // Mock for connect to the database.
    await new Promise(resolve => setTimeout(resolve, 500));

    return 'respond with a resource';
  }
}
