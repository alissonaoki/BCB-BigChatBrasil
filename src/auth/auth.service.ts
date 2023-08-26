import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly jwtSecret = 'seu_segredo_jwt';

 
  generateAccessToken(userId: number): string {
    const payload = { userId };
    return jwt.sign(payload, this.jwtSecret, { expiresIn: '10h' });
  }

  async validateAccessToken(token: string): Promise<any> {
    try {
      return jwt.verify(token, this.jwtSecret);
    } catch (error) {
      throw new UnauthorizedException('Token JWT inválido ou expirado');
    }
  }

  async authenticateUser(username: string, password: string): Promise<{ id: number } | null> {
    // A implementar

    if (username === 'usuario' && password === 'senha') {
      return { id: 1 };
    }

    return null;
  }
}
