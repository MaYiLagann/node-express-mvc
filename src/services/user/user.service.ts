import { IUserService } from "./user.service.interface";

export class UserService implements IUserService {
  async authorize(id: string, password: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 0));

    return Boolean(id && password);
  }
}
