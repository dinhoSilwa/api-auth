import { AuthUser, type IAuthUser } from "../models/Auth";
import type { IAuthRepository } from "./IAuthRepository";

export class AuthRepository implements IAuthRepository<IAuthUser> {
  async create(data: IAuthUser): Promise<IAuthUser> {
    const user = new AuthUser(data);
    await user.save();
    return user;
  }

  async findByEmail(email: string): Promise<IAuthUser | null> {
    return await AuthUser.findOne({ email });
  }
}
