/**
 * Error cause from inside the application system.
 */
export class SystemError extends Error {
  public constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, SystemError.prototype);
  }
}
