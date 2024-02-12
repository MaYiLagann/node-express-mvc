export interface IUserService {
  /**
   * Authorize the user.
   * @param id ID of the user.
   * @param password Password of the user.
   * @return Result of authorization.
   */
  authorize(id: string, password: string): boolean;
}
