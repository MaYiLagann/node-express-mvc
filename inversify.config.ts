import { Container } from "inversify";
import { services } from "./src/services/services";
import { IUserService } from "./src/services/user/user.service.interface";
import { UserService } from "./src/services/user/user.service";

export const container = new Container();

// Define injection of services.
container.bind<IUserService>(services.UserService).to(UserService).inTransientScope();
