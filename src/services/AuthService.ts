import { IAuthRepository } from "../repositores/IAuthRepository";
import { IAuthUser } from "../models/Auth";
import { hashPassword, verifyPassword } from "../utils/Hashing";
import { JWTservice } from "../utils/JWT";

export class AuthService {
  private userRepository: IAuthRepository<IAuthUser>;

  constructor(userRepository: IAuthRepository<IAuthUser>) {
    this.userRepository = userRepository;
  }

  async register(user: IAuthUser): Promise<IAuthUser | any> {
    if (!user.username || !user.email || !user.password)
      throw new Error("Campos Obrigatórios");
    const existingUser = await this.userRepository.findByEmail(user.email);
    if (existingUser) {
      console.log(existingUser);
      throw new Error(`Usuário já Existe`);
    }
    user.password = await hashPassword(user.password);
    return await this.userRepository.create(user);
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new Error(`Nenhum Email Encontrado ${user}`);
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid Credentials");
    const jwt = new JWTservice();
    return jwt.generateJWT(user);
  }
}
