import { Request, Response } from "express";
import { AuthRepository } from "../repositores/AuthRepository";
import { AuthService } from "../services/AuthService";
const useRepository = new AuthRepository();
const authService = new AuthService(useRepository);

export class AuthController {
  static async reister(req: Request, res: Response): Promise<void> {
    try {
      const user = await authService.register(req.body);
      const { username, email, _id } = user;
      res.status(201).json({ username, email, _id });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  static async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const token = await authService.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
