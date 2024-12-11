import { Request } from "express";
import type { IAuthUser } from "../models/Auth";

declare global {
  namespace Express {
    export interface Request {
      user?: IAuthUser;
    }
  }
}
