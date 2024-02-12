import { IUserService } from "./user.service.interface";

export class UserService implements IUserService {
  authorize(id: string, password: string): boolean {
    return Boolean(id && password);
  }
}
