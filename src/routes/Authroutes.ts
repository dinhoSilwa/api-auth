import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

export const AuthRoutes = Router();

AuthRoutes.post("/register", AuthController.reister);
AuthRoutes.post("/login", AuthController.login);
