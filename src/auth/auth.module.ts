import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'seu_segredo_jwt', 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
