import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: { username: string; password: string }) {
    
    const user = await this.authService.authenticateUser(
      credentials.username,
      credentials.password,
    );

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const accessToken = this.authService.generateAccessToken(user.id);

    return { accessToken };
  }
}
