import { User } from "@prisma/client";

export interface IUserService {
  /**
   * Authorize the user.
   * @param id ID of the user.
   * @param password Password of the user.
   * @return Result of authorization.
   */
  authorize(id: string, password: string): Promise<boolean>;

  /**
   * Sign up with user entity.
   * @param user User entity that want to be added. password field is not hashed yet.
   * @return Created user entity.
   */
  signUp(user: User): Promise<User>;
}
