import type { IAuthUser } from "../models/Auth";

export interface IAuthRepository<T> {
  create(data: T): Promise<T>;
  findByEmail(email: string): Promise<IAuthUser | null>;
}
