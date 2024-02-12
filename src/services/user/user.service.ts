import { injectable } from "inversify";
import { PrismaClient, User } from "@prisma/client";
import { IUserService } from "./user.service.interface";

@injectable()
export class UserService implements IUserService {
  async authorize(id: string, password: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 0));

    return Boolean(id && password);
  }

  async signUp(user: User): Promise<User> {
    const prisma = new PrismaClient();

    try {
      const entity = await prisma.user.create({
        data: {
          email: user.email,
          password: 'user.password', // Todo: Hash the password.
          name: user.name,
        }
      });

      await prisma.$disconnect();

      return entity;
    } catch (e) {
      await prisma.$disconnect();
      throw e;
    }
  }
}
