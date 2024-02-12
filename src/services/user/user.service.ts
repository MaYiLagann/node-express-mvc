import bcrypt from "bcrypt";
import { injectable } from "inversify";
import { PrismaClient, User } from "@prisma/client";
import { IUserService } from "./user.service.interface";
import { EnvironmentError } from "../../models/errors/environment-error";
import { ArgumentError } from "../../models/errors/argument-error";

const envPasswordSalt = 'USER_PASSWORD_SALT';

@injectable()
export class UserService implements IUserService {
  async authorize(id: string, password: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 0));

    return Boolean(id && password);
  }

  async signUp(user: User): Promise<User> {
    if (!user.email.trim()) throw new ArgumentError(`User requires the field email`, 'user');
    if (!user.password.trim()) throw new ArgumentError(`User requires the field password`, 'user');

    const passwordSalt = process.env[envPasswordSalt];
    if (!passwordSalt) throw new EnvironmentError(`Environment ${envPasswordSalt} is not set`, envPasswordSalt);

    const prisma = new PrismaClient();

    try {
      const password = await bcrypt.hash(user.password, passwordSalt);

      const entity = await prisma.user.create({
        data: {
          email: user.email,
          password: password,
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
