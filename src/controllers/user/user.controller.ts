import { inject, injectable } from "inversify";
import { services } from "../../services/services";
import { IUserService } from "../../services/user/user.service.interface";
import { RequestPostUserModel, ResponsePostUserModel } from "../../models/apis/post-user-schema";

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

  public async Post(request: RequestPostUserModel): Promise<ResponsePostUserModel> {
    const user = await this.userService.signUp({
      id: 0,
      email: request.email,
      password: request.password,
      name: request.name,
    });

    return {
      id: user.id,
    };
  }
}
