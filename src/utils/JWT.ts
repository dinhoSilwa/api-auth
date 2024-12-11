import jwt from "jsonwebtoken";
import type { IAuthUser } from "../models/Auth";

const SECRET_KEY = process.env.JWT_SECRET || "12345678";
export class JWTservice {
  private secretKey: string;
  constructor(secretKey: string = SECRET_KEY) {
    this.secretKey = secretKey;
  }
  generateJWT(user: Partial<IAuthUser>): string {
    const { username, email, _id } = user;
    return jwt.sign({ username, email, _id }, this.secretKey, {
      expiresIn: "7d",
    });
  }

  verifyJWT(token: string): any {
    return jwt.verify(token, this.secretKey);
  }
}
