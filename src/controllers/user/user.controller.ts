import { inject, injectable } from "inversify";
import { services } from "../../services/services";
import { IUserService } from "../../services/user/user.service.interface";

@injectable()
export class UserController {
  public constructor(
    @inject(services.UserService) private userService: IUserService,
  ) {
  }

  public async Get(): Promise<string> {
    const result = await this.userService.authorize('id', 'pw');
    if (result)
      return 'respond with a resource';
    else
      throw new Error('failed to get user');
  }

  public async Post(email: string, password: string, name: string): Promise<void> {
    await this.userService.signUp({
      id: 0,
      email: email,
      password: password,
      name: name,
    });
  }
}
