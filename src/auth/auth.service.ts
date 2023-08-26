import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string) {
    
    const user = { name: username,
                   password: password } //await yourUserService.findUserByUsername(username);

    // Logica temporaria so para passar validacao sera implementada posteriormente
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
   
    return user;
  }

  async generateAccessToken(user: any): Promise<string> {
    const payload = { username: user.username, sub: user.userId };
    return this.jwtService.sign(payload);
  }
}
