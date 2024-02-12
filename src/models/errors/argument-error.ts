import { SystemError } from "./system-error";

/**
 * Error cause from validate the argument while running the function.
 */
export class ArgumentError extends SystemError {
  public argumentName: string;

  public constructor(message: string, argumentName: string) {
    super(message);
    Object.setPrototypeOf(this, ArgumentError.prototype);

    this.argumentName = argumentName;
  }
}
