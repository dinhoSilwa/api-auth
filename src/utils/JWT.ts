import jwt from "jsonwebtoken";
import type { IAuthUser } from "../models/Auth";
import { configDotenv } from "dotenv";
configDotenv()

const {JWT_SECRET} = process.env
export class JWTservice {
  private secretKey: string;
  constructor(secretKey: string = JWT_SECRET as string) {
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
