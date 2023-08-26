import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: { username: string; password: string }) {
    try {
      // Autenticação do usuário
      const user = await this.authService.validateUser(
        credentials.username,
        credentials.password,
      );

      // Geração de token JWT
      const accessToken = await this.authService.generateAccessToken(user);

      // Retorne o token JWT para o cliente
      return { accessToken };
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
