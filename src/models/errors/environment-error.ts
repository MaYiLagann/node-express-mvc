import { SystemError } from "./system-error";

/**
 * Error cause from reading the environment variable.
 */
export class EnvironmentError extends SystemError {
  public variableName: string;

  public constructor(message: string, variableName: string) {
    super(message);
    Object.setPrototypeOf(this, EnvironmentError.prototype);

    this.variableName = variableName;
  }
}
